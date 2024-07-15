import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app=express()
// const link="mongodb+srv://beingadnank78:xVLnW5JhIEjFT2eX@cluster0.dbhfphq.mongodb.net/"

dotenv.config() 

const connectApp=()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("Connected to Database")
    }).catch((err)=>{
        console.log(err);
        throw err
    })
}
app.listen(8000,()=>{
    console.log('Server connected',8000)
    connectApp()
})