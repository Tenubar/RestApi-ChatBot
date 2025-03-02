import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const dbconnect = ()=>{
    mongoose.connect(process.env.MONGOURI, {});
}