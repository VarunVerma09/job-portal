import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Navbar from "../shared/Navbar";
import axios from "axios";
import { USER_ROUTE } from "@/utils/paths";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/Store";
import { setLoading } from "@/redux/authSlice";
import { Tuple } from "@reduxjs/toolkit";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const dispatch = useDispatch();
  const {loading} = useSelector(store=>store.auth);
  const navi = useNavigate();

  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    file: "",
    password: "",
  });

  const handler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!input.fullName || !input.email || !input.password || !input.phone || !input.role) {
      toast.warning("Please fill all required fields");
      return;
    }

    try {
      dispatch(setLoading(true))
      toast.loading("Creating your account...");

      const res = await axios.post(`${USER_ROUTE}/register`, {
        fullName: input.fullName,
        email: input.email,
        phone: input.phone,
        password: input.password,
        role: input.role,
      });

      toast.dismiss(); // Remove loading toast

      if (res.data.success) {
        toast.success(res.data.message || "Signup successful!");
        navi("/login");
      } else {
        toast.warning(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Signup error:", error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server error! Please try again later.");
      }
    }finally{
      dispatch(setLoading(false))
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-[95%] md:w-1/2 bg-white p-10 rounded-2xl md:shadow-2xl border md:border-white-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-wide">
            Sign Up
          </h2>

          <form className="space-y-6 text-[1.05rem]" onSubmit={submitHandler}>
            <div>
              <Label htmlFor="fullName" className="text-lg font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={input.fullName}
                onChange={handler}
                name="fullName"
                placeholder="Enter your name"
                className="mt-2 text-base py-5"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={input.email}
                onChange={handler}
                placeholder="Enter your email"
                className="mt-2 text-base py-5"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-lg font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="number"
                value={input.phone}
                onChange={handler}
                placeholder="Enter phone number"
                className="mt-2 text-base py-5"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-lg font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={input.password}
                onChange={handler}
                placeholder="Enter password"
                className="mt-2 text-base py-5"
                required
              />
            </div>

            <div>
              <Label className="text-lg font-medium">Role</Label>
              <div className="flex items-center gap-6 mt-3">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    checked={input.role === "student"}
                    onChange={handler}
                    value="student"
                  />
                  <Label htmlFor="student" className="text-base">
                    Student
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    checked={input.role === "recruiter"}
                    onChange={handler}
                    value="recruiter"
                  />
                  <Label htmlFor="recruiter" className="text-base">
                    Recruiter
                  </Label>
                </div>
              </div>
            </div>

                  {loading ? (
              <Button className="w-full mt-4 py-6 text-lg font-semibold">
                {" "}
                <Loader2 />
                Please Wait
              </Button>
            ) : (
              <Button
                className="w-full mt-4 py-6 text-lg font-semibold"
                type="submit"
              >
                Sign up
              </Button>
            )}

            <p className="text-center text-base text-gray-500 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
