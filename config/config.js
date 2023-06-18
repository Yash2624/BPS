//import mongoose from "mongoose";

const mongoose = require ('mongoose')
if (!process.env.NODE_ENV) {
    const dotenv = require("dotenv");
    dotenv.config();
  }

//  console.log(process.env);

const config = {
    PORT: 3000,
    MONGODB_URI: process.env.MONGODB_URI 
}

MONGODB_URI: "mongodb+srv://Yash:Yash2624@cluster0.vcdnyx2.mongodb.net/BPSdata?retryWrites=true&w=majority"

module.exports= config;

