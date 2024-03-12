// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


// always use try catch or promise when working with  the database because there can be problems its for sure so think accordingly,
// Database is always in another continent (async await / promise)


// function async connectDb(){
    
    // }

/*
import express from "express";
const app = express();



;(async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}`);
       app.on("error", (error) => {
        console.log("ERROR: ",error)
        throw error;
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })


    }catch(error){
        console.error("ERROR:",error);
        throw error;
    }
})()

*/


connectDB()
