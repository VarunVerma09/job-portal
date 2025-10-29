import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import database from "./database/db.js"
import userRoute from "./routes/userRoutes.js"

dotenv.config();

const app = express();





//midleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());


const port = process.env.PORT


//api's

app.use("/api/v1/user",userRoute)




app.listen(port,()=>{
    database();
    console.log(`The server is running on ${port}`);
    
})