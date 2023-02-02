import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import connectDb from './config/connectDb.js';
import routes from './routes/userRoutes.js';

const PORT=9000|| process.env.PORT;
dotenv.config();





// /Object 
const app=express();


//  Database connection
connectDb();



// Middlewares

// Morgan Baad mai use krenge abhi get error aari
// app.use(morgan('dev'));
app.use(express.json()); 
app.use((cors()));




app.use('/api/v1/users',routes)

//Routes
app.get('/',(req,res)=>{
    res.send("Hello ");
})





app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`);
})