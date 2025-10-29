import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";


export const register = async (req, res) => {
  try {
    const { fullName, email, phone, password, role } = req.body;
    if (!fullName || !email || !phone || !password || !role) {
      return res.status(400).send({
        massege: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
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
    return res.status(201).send({
        success: true,
        massege: "User Registered Successfully",
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
        });
    };
    const tokenData = {
        userID:user._id
    }
    const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
user={
  _id:user._id,
  fullName:user.fullName,
  email:user.email,
  phone:user.phone,
  role:user.role,
  profile:user.profile


}

    return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).send({
      massege:`Welcome Back ${user.fullName}`,
      user,
      success:true
    })
   

  } catch (error) {
    console.log(error);
  }
};


export const logout = async (req,res) =>{
  try {
    return res.status(200).cookie("token","",{maxAge:0}).send({
      massege:"Loged Out Successfully",
      success:true
    })
    
  } catch (error) {
    console.log(error);
    
  }
}


export const updateProfile = async (req, res) =>{
try {
  const {fullName,email,phone,bio,skills}=req.body;
if(!fullName || !email || !phone || !bio || !skills){
  return res.status(400).send({
    massege:"Somthing Went Wrong",
    success:false
  })
}
const skillsArray = skills.split(",");
const userId = req.id;
let user = await User.findById(userId);
if(!user){
  return res.status(400).send({
    massege:"User Not Found",
    success:false
  })
}
user.fullName = fullName,
user.email = email,
user.phone = phone,
user.profile.bio = bio,
user.profile.skills = skillsArray

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
  massege:"Profile Updated Successfully",
  user,
  success:true
})

} catch (error) {
  console.log(error);
  
}

}

