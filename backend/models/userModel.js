import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      bio: { type: String, default: "" },
      skills: [{ type: String, default: [] }],
      resume: { type: String, default: "" }, // Base64 text
      resumeOrignalName: { type: String, default: "" },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: { type: String, default: "" }, // Base64 text (image)
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
