import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.js';
import bookRoute from "./route/book.route.js";
import userRoute from './route/user.route.js'

import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());

app.use('/book',bookRoute)
app.use('/user',userRoute)


app.listen(port, () => {
    connectDB()
  console.log(`Server is running at http://localhost:${port}`);
});