  import bcrypt from "bcrypt";
  import jwt from "jsonwebtoken"
  import { User } from "../models/userModel.js";

  export const register = async (req, res) => {
    try {
      const { fullName, email, phone, password, role} = req.body;
      if (!fullName || !email || !phone || !password || !role) {
        return res.status(400).send({
          message: "Something is missing",
          success: false,
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(404).send({
          success: false,
          message: "User is Already Exist",
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
      return res.status(201).send({
        success: true,
        message: "User Registered Successfully",
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
        message: "Something is missing",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Incorrect Email or Password",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send({
        success: false,
        message: "Incorrect Email or Password",
      });
    }

    if (role !== user.role) {
      return res.status(400).send({
        success: false,
        message: "Account doesn't exist with the current role",
      });
    }

    const tokenData = { userID: user._id };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

    const userData = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
      .send({
        message: `Welcome back, ${user.fullName}`,
        user: userData,
        success: true,
      });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


  export const logout = async (req,res) =>{
    try {
      return res.status(200).cookie("token","",{maxAge:0}).send({
        message:"Loged Out Successfully",
        success:true
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }


  export const updateProfile = async (req, res) =>{
  try {
    const {fullName,email,phone,bio,skills}=req.body;

    let skillsArray;
    if(skills){

      
      skillsArray = skills.split(",");
    }

  const userId = req.params.id;
  let user = await User.findById(userId);
  if(!user){
    return res.status(400).send({
      message:"User Not Found",
      success:false
    })
  }
  if(fullName)user.fullName = fullName;
  if(email)user.email = email;
  if(phone)user.phone = phone;
  if(bio)user.profile.bio = bio;
  if(skills)user.profile.skills = skillsArray;

  await user.save();
  user={
    _id:user._id,
    fullName:user.fullName,
    email:user.email,
    phone:user.phone,
    role:user.role,
    profile:user.profile
  }
  return res.status(200).send({
    message:"Profile Updated Successfully",
    user,
    success:true
  })

  } catch (error) {
    console.log(error);
    
  }

  }

