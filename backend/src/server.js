import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import foodRouter from './routes/food.router.js'
import userRouter from './routes/user.router.js'
import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)

app.use('/api/foods', foodRouter);
app.use('/api/user', userRouter);



const PORT = 5000;
app.listen(PORT, () => {
  console.log('listening on portttt ' + PORT)
});