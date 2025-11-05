import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Navbar from "../shared/Navbar";


export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Right side form */}
      <div className=" md:w-1/2 w-[95%] bg-white -mt-18 p-10 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-wide">
          Log In
        </h2>

        <form className="space-y-6 text-[1.05rem]">
          <div>
            <Label htmlFor="fullName" className="text-lg font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
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
              placeholder="Enter password"
              className="mt-2 text-base py-5"
              required
            />
          </div>

          <div>
            <Label className="text-lg font-medium">Role</Label>
            <RadioGroup
              value={role}
              onValueChange={setRole}
              className="flex items-center gap-6 mt-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student" className="text-base">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="recruiter" />
                <Label htmlFor="recruiter" className="text-base">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>


          <Button className="w-full mt-4 py-6 text-lg font-semibold" type="submit">
            Login 
          </Button>

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
