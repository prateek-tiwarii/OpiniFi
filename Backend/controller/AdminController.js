import jwt from 'jsonwebtoken';
import Admin from '../models/AdminModel.js';
import OpinionMarket from '../models/OpinionModel.js';



export const AdminController = {}

 AdminController.AdminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        if (!email || !password) {
            return res.json({ message: 'Email and password are required', success: false });
        }

        
        const admin = await Admin.findOne({ email });

        
        if (!admin) {
            return res.json({ message: 'Admin not found', success: false });
        }

      

        
        if (admin.password !== password) {
            return res.json({ message: 'Invalid password', success: false });
        }

        
        const token = jwt.sign(
            { email: admin.email, id: admin._id, role: 'admin' },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1d' }
        );

        
        return res.status(200).json({
            message: 'Admin Login Successful',
            token,
            role: 'admin',
            success: true
        });
    } catch (error) {
        console.error('AdminLogin Error:', error);
        return res.json({ message: 'Something went wrong', success: false });
    }
};


AdminController.CreateQuestion = async (req ,res)=>{
    const {  question , description , category	, closingTime} =  req.body;

    if(!question || !closingTime || !category){
        return res.status(400).json({ message: 'All fields are required', success: false });
    }

    try{
        const newOpinion = new OpinionMarket({
            question,
            description,
            category,
            closingTime,
             yesShares: 5000,
             noShares: 5000,
             priceYes: 0.5,
             priceNo: 0.5,
             totalVolume: 0,
             status: 'open'
        })

        await newOpinion.save();
        return res.status(201).json({ message: 'Question created successfully', success: true, data: newOpinion });
    }

    catch(error){
        console.error('Error creating question:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }

}


AdminController.GetAllQuestions = async (req, res) => {

    try{
    const {status , page =1 , limit = 10} = req.query;

    const filter = {};

    if(status &&  ['open', 'closed', 'settled'].includes(status)){
        filter.status = status;
    }

const skip = (parseInt(page) - 1) * parseInt(limit);

    const total = await OpinionMarket.countDocuments(filter);
    const data = await OpinionMarket.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    return res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      data,
    });

  } catch (error) {
    console.error('Error fetching questions:', error);
    return res.status(500).json({ message: 'Internal server error', success: false });
  }
};



AdminController.SettleOpinion = async (req, res) => {
    const {opinionId, correctAnswer} = req.body;
    if (!opinionId || !correctAnswer) {
        return res.status(400).json({ message: 'Opinion ID and correct answer are required', success: false });
    }

    try{
        const opinion = await OpinionMarket.findById(opinionId);
        if (!opinion) {
            return res.status(404).json({ message: 'Opinion not found', success: false });
        }

        if (opinion.status !== 'open') {
            return res.status(400).json({ message: 'Opinion is not open for settlement', success: false });
        }

        opinion.status = 'settled';
        opinion.correctAnswer = correctAnswer;
        await opinion.save();

        return res.status(200).json({ message: 'Opinion settled successfully', success: true, data: opinion });
    }catch (error) {
        console.error('Error settling opinion:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}


AdminController.CloseOpinion = async (req, res) => {
    const { opinionId } = req.body;
    if (!opinionId) {
        return res.status(400).json({ message: 'Opinion ID is required', success: false });
    }

    try {
        const opinion = await OpinionMarket.findById(opinionId);
        if (!opinion) {
            return res.status(404).json({ message: 'Opinion not found', success: false });
        }

        if (opinion.status !== 'open') {
            return res.status(400).json({ message: 'Opinion is not open for closing', success: false });
        }

        opinion.status = 'closed';
        await opinion.save();

        return res.status(200).json({ message: 'Opinion closed successfully', success: true, data: opinion });
    } catch (error) {
        console.error('Error closing opinion:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}

