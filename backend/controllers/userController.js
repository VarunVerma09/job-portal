import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, phone, password, role } = req.body;
    if (!fullName || !email || !phone || !password || role) {
      return res.status(400).send({
        massege: "Something is missing",
        success: false,
      });
    }
    const user = await User.find({ email });
    if (user) {
      return res.status(404).send({
        success: false,
        massege: "User is Already Exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
      role,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).send({
        success: false,
        massege: "Somting is Missing",
      });
    }
    const user = await User.find({email})
    if(!user) {
        return res.status(404).send({
            success:false,
            massege:"Inncorrect Email and Password"
        })
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password);
     if(!isPasswordMatch) {
        return res.status(404).send({
            success:false,
            massege:"Inncorrect Email and Password"
        })
    }
    if(role !== user.role){
         return res.status(400).send({
            success:false,
            massege:"Account dosen't exist with current role"
        })
    };
    const tokenData = {
        userID:user._id
    }
    const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'})
    return 

  } catch (error) {
    console.log(error);
  }
};
