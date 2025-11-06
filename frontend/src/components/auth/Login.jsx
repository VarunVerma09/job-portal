import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Navbar from "../shared/Navbar";
import { toast } from "sonner";
import axios from "axios";
import { USER_ROUTE } from "@/utils/paths";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

export default function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const navi = useNavigate();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      toast.loading("Login your account...");

      const res = await axios.post(`${USER_ROUTE}/login`, {
        fullName: input.fullName,
        email: input.email,

        password: input.password,
        role: input.role,
      });

      toast.dismiss(); // Remove loading toast

      if (res.data.success) {
        toast.success(res.data.message || "Signup successful!");
        navi("/");
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
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        {/* Right side form */}
        <div className=" md:w-1/2 w-[95%] bg-white -mt-18 p-10 rounded-2xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-wide">
            Log In
          </h2>

          <form onSubmit={submitHandler} className="space-y-6 text-[1.05rem]">
            <div>
              <Label htmlFor="fullName" className="text-lg font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                onChange={handler}
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
                type="email"
                name="email"
                onChange={handler}
                placeholder="Enter your email"
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
                onChange={handler}
                placeholder="Enter password"
                className="mt-2 text-base py-5"
                required
              />
            </div>

            <div>
              <Label className="text-lg font-medium">Role</Label>
              <RadioGroup className="flex items-center gap-6 mt-3">
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
              </RadioGroup>
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
                Login
              </Button>
            )}

            <p className="text-center text-base text-gray-500 mt-4">
              If you Don't have any account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
