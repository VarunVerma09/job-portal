import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import database from "./database/db.js";
import userRoute from "./routes/userRoutes.js"
import companyRoute from "./routes/companyRoutes.js";
import jobRoute from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();
const app = express();
const corsOption = {
    origin:"http://localhost:5173/",
    credentials:true
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoutes);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  database();
  console.log(`The server is running on ${port}`);
});
