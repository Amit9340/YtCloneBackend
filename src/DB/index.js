import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from 'dotenv';
dotenv.config({path: "./public/temp/.env"});

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log("MongoDB connected:");
    } catch (error) {
        console.error("MongoDb not COnnected Due to the following Error", error);

    }
}
export default connectDB;