import OpinionMarket from "../models/OpinionModel";
import User from "../models/UserModel";
import Position from "../models/PositionModel";
import Wallet from "../models/UserWallet";
import jwt from 'jsonwebtoken';
import Trade from "../models/TradeModel";


export const userController = {};

 userController.UserLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        if (!email || !password) {
            return res.json({ message: 'Email and password are required', success: false });
        }

        
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ message: 'user not found', success: false });
        }

      

        if (user.password !== password) {
            return res.json({ message: 'Invalid password', success: false });
        }

        
        const token = jwt.sign(
            { email: user.email, id: user._id, role: 'user' },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1d' }
        );

        
        return res.status(200).json({
            message: 'user Login Successful',
            token,
            role: 'user',
            success: true
        });
    } catch (error) {
        console.error('UserLogin Error:', error);
        return res.json({ message: 'Something went wrong', success: false });
    }
};

userController.signUp = async (req, res) => {

    const{name , email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({ message: 'All fields are required', success: false });
    }

    try{
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({ message: 'User already exists', success: false });
        }

        const newUser = new User({
            name,
            email,
            password
        })

        await newUser.save();

        const newWallet = new Wallet({
            user: newUser._id,
            balance: 1000, // initial balance loaded as a signup bonus
            currency: 'INR'
        });

        await newWallet.save();

        return res.status(201).json({ message: 'User registered successfully', success: true });
    } catch (error) {
        console.error('SignUp Error:', error);
        return res.status(500).json({ message: 'Something went wrong', success: false });
    }
}

userController.BuyOpinion = async (req, res) => {
    const {side , shares ,market_id} = req.body;
    const userId = req.user._id;

    if(!side || !shares || !market_id){
        return res.status(400).json({ message: 'All fields are required', success: false });
    }

    try{
        const market = await OpinionMarket.findById(market_id)
        if(!market){
            return res.status(404).json({ message: 'Market not found', success: false });
        }
        if(market.closingTime < new Date() || market.status !== 'open'){
            return res.status(400).json({ message: 'Market is closed', success: false });
        }
        
        const wallet = await Wallet.findOne({ user: userId });
        if(!wallet){
            return res.status(404).json({ message: 'Wallet not found', success: false });
        }

          const price =
        side === "yes"
        ? market.noShares / (market.yesShares + market.noShares)
        : market.yesShares / (market.yesShares + market.noShares);

       const totalCost = shares * price * 100;

        if(wallet.balance < totalCost){
            return res.status(400).json({ message: 'Insufficient balance', success: false });
        }

        wallet.balance -= totalCost;
        await wallet.save();

      let position = await Position.findOne({ user: userId, market: market_id });
      if(!position) {
          position = new Position({
              user: userId,
              market: market_id,
              yesShares: 0,
              noShares: 0
          });
      }
     if (side === "yes") {
  const totalOldShares = position.yesShares;
  const totalNewShares = totalOldShares + shares;

  position.avgYesPrice = (
    (position.avgYesPrice * totalOldShares) + (price * shares)
  ) / totalNewShares;

  position.yesShares = totalNewShares;
} else {
  const totalOldShares = position.noShares;
  const totalNewShares = totalOldShares + shares;

  position.avgNoPrice = (
    (position.avgNoPrice * totalOldShares) + (price * shares)
  ) / totalNewShares;

  position.noShares = totalNewShares;
}


      await position.save();

        market.totalVolume += totalCost;

            if (side === "yes") {
         market.yesShares += shares;
          } else {
        market.noShares += shares;
           }


        await market.save();


         const trade = new Trade({
      user: userId,
      market: market_id,
      side: side.toUpperCase(),
      type: 'buy',
      shares,
      pricePerShare: price,
      totalAmount: totalCost
    });

    await trade.save();

//Update the market share price via websocket

  if(global.wss) {
    global.wss.clients.forEach(client=>{
     if(client.readyState === 1){
         client.send(JSON.stringify({
        type: "market_update",
        marketId: market._id,
        priceYes: market.noShares / (market.noShares + market.yesShares),
        priceNo: market.yesShares / (market.noShares + market.yesShares),
        yesShares: market.yesShares,
        noShares: market.noShares,
        totalVolume: market.totalVolume
      }));
     }
    })
  }

  return res.status(200).json({
      message: "Buy successful",
      success: true,
      price,
      shares,
      remainingBalance: wallet.balance
    });
    } catch (error) {
        console.error('BuyOpinion Error:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }


}

userController.SellOpinion = async (req, res) => {
    
    const {side , shares ,market_id} = req.body;
    const userId = req.user._id;

    if(!side || !shares || !market_id){
        return res.status(400).json({ message: 'All fields are required', success: false });
    }

    try{
        const market = await OpinionMarket.findById(market_id)
        if(!market){
            return res.status(404).json({ message: 'Market not found', success: false });
        }
        if(market.closingTime < new Date() || market.status !== 'open'){
            return res.status(400).json({ message: 'Market is closed', success: false });
        }
        
        const wallet = await Wallet.findOne({ user: userId });
        if(!wallet){
            return res.status(404).json({ message: 'Wallet not found', success: false });
        }

        let position = await Position.findOne({ user: userId, market: market_id });
        if(!position){
            return res.status(404).json({ message: 'Position not found', success: false });
        }

        if( (side === "yes" && position.yesShares < shares) || (side === "no" && position.noShares < shares)){
            return res.status(400).json({ message: 'Insufficient shares to sell', success: false });
        }


        const price =
    side === "yes"
    ? market.noShares / (market.yesShares + market.noShares)
    : market.yesShares / (market.yesShares + market.noShares);


    const remburseAmount = shares * price * 100;

    wallet.balance += remburseAmount;
    await wallet.save();

if (side === "yes") {
  position.yesShares -= shares;
} else {
  position.noShares -= shares;
}

        await position.save();

        market.totalVolume -= remburseAmount;

            if (side === "yes") {
         market.yesShares -= shares;
          } else {
        market.noShares -= shares;
           }

        await market.save();

        const trade = new Trade({
      user: userId,
      market: market_id,
      side: side.toUpperCase(),
      type: 'sell',
      shares,
      pricePerShare: price,
      totalAmount: remburseAmount
    });

    await trade.save();


    //Update the market share price via websocket

    if (global.wss) {
  const yesTotal = market.yesShares + market.noShares;
  const priceYes = yesTotal > 0 ? market.noShares / yesTotal : 0.5;
  const priceNo = yesTotal > 0 ? market.yesShares / yesTotal : 0.5;

  global.wss.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(JSON.stringify({
        type: "market_update",
        marketId: market._id,
        priceYes,
        priceNo,
        yesShares: market.yesShares,
        noShares: market.noShares,
        totalVolume: market.totalVolume
      }));
    }
  });
}

    return res.status(200).json({
        message: "Sell successful",
        success: true,
        price,
        shares,
        newBalance: wallet.balance
      });
    } catch (error) {
        console.error('SellOpinion Error:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}


userController.TopUpWallet = async(req ,res)=>{
    const {amount} = req.body;
    const userId = req.user._id;

    if(!amount || amount <= 0){
        return res.status(400).json({ message: 'Invalid amount', success: false });
    }

    try{
        const wallet = await Wallet.findOne({ user: userId });
        if(!wallet){
            return res.status(404).json({ message: 'Wallet not found', success: false });
        }

        wallet.balance += amount;
        await wallet.save();

        return res.status(200).json({
            message: 'Wallet topped up successfully',
            success: true,
            newBalance: wallet.balance
        });
    } catch (error) {
        console.error('TopUpWallet Error:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}

userController.GetMarketList = async (req, res) => {

     try {
    const markets = await OpinionMarket.find({ status: 'open' }).sort({ closingTime: 1 });

    const formattedMarkets = markets.map(market => {
      const yesShares = market.yesShares;
      const noShares = market.noShares;

      const totalShares = yesShares + noShares;
      const priceYes = totalShares === 0 ? 0.5 : noShares / totalShares;
      const priceNo = totalShares === 0 ? 0.5 : yesShares / totalShares;

      return {
        _id: market._id,
        question: market.question,
        category: market.category,
        closingTime: market.closingTime,
        status: market.status,
        priceYes: priceYes.toFixed(2),
        priceNo: priceNo.toFixed(2),
        totalVolume: market.totalVolume
      };
    });

    return res.status(200).json({
      success: true,
      data: formattedMarkets
    });
  } catch (error) {
    console.error('Get Active Markets Error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }


}

userController.GetSingleMarket = async (req, res) => {
    const { marketId } = req.params;
    if (!marketId) {
        return res.status(400).json({ message: 'Market ID is required', success: false });
    }
    try {
        const market = await OpinionMarket.findById(marketId);
        if (!market) {
            return res.status(404).json({ message: 'Market not found', success: false });
        }

        const yesShares = market.yesShares;
        const noShares = market.noShares;

        const totalShares = yesShares + noShares;
        const priceYes = totalShares === 0 ? 0.5 : noShares / totalShares;
        const priceNo = totalShares === 0 ? 0.5 : yesShares / totalShares;

        return res.status(200).json({
            success: true,
            data: {
                _id: market._id,
                question: market.question,
                description: market.description,
                category: market.category,
                closingTime: market.closingTime,
                status: market.status,
                priceYes: priceYes.toFixed(2),
                priceNo: priceNo.toFixed(2),
                yesShares,
                noShares,
                totalVolume: market.totalVolume
            }
        });
    } catch (error) {
        console.error('Get Single Market Error:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }

}

userController.GetUserPositions = async (req, res) => {
    const userId = req.user._id;

    try {
        const positions = await Position.find({ user: userId }).populate('market');

        if (!positions || positions.length === 0) {
            return res.status(404).json({ message: 'No positions found', success: false });
        }

        const formattedPositions = positions.map(position => ({
            marketId: position.market._id,
            question: position.market.question,
            yesShares: position.yesShares,
            noShares: position.noShares,
            avgYesPrice: position.avgYesPrice.toFixed(2),
            avgNoPrice: position.avgNoPrice.toFixed(2)
        }));

        return res.status(200).json({
            success: true,
            data: formattedPositions
        });
    } catch (error) {
        console.error('Get User Positions Error:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }

}

userController.WalletBalance = async (req, res) => {
    const userId = req.user._id;

    try {
        const wallet = await Wallet.findOne({ user: userId });
        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found', success: false });
        }

        return res.status(200).json({
            message: 'Wallet balance retrieved successfully',
            success: true,
            balance: wallet.balance
        });
    } catch (error) {
        console.error('WalletBalance Error:', error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}









