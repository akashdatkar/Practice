import express from "express";
import env from "dotenv";
env.config({
    path: ".env"
})
const app=express();

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on ${process.env.PORT}`);
})
