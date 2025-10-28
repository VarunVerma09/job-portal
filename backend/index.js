import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./database/db.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();





//midleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());


const port = process.env.PORT

app.listen(port,()=>{
    database();
    console.log(`The server is running on ${port}`);
    
})