import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true,
        unique:true
    },
      phone:{
        type:Number,
        required:true
    },
      password:{
        type:String,
        required:true
    },
      fullName:{
        type:String,
        required:true
    },
      role:{
        type:String,
        enum:["student","recuriter"],
        required:true
    },
     profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOrignalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:"Company"},
        profilePhoto:{type:String,default:""}

    },
},{timestamps:true})

export const User = mongoose.model("User", userSchema);