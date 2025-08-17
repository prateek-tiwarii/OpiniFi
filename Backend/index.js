import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './utils/connectToDb.js';
import { WebSocketServer } from 'ws';




const app = express();
dotenv.config();

app.use(cors({
    origin: '*',
   
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
   
}));



app.use(express.json());

connectToDb();

app.get('/', (req, res) => {
    res.json({
        message: "Hello Hello",
        healthy: true
    })
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




const wss = new WebSocketServer({ port: 8080 });

global.wss = wss;

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});