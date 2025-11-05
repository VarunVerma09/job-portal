import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Navbar from "../shared/Navbar";
import axios from "axios";
import Url from "../shared/Url";


export default function Signup() {
  const [input,setInput]=useState({
    fullName:"",
    email:"",
    phone:"",
    role:"",
    file:"",
    password:""
  });
  const handler = () =>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const fileHandler = () =>{
    setInput({...input,file:e.target.files?.[0]})

  }
  const [role, setRole] = useState("student");

  const api =async () => {
    await axios.post(`${Url}/api/v1/user/register`,input)


  }
  useEffect(()=>{
    api();
  },[])

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Right side form */}
      <div className="w-[95%] md:w-1/2 bg-white p-10 rounded-2xl md:shadow-2xl border md:border-white-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-wide">
          Sign UP
        </h2>

        <form className="space-y-6 text-[1.05rem]">
          <div>
            <Label htmlFor="fullName" className="text-lg font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              value ={input.fullName}
              onChange ={handler}
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
               value ={input.email}
              onChange ={handler}
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
              type="number"
               value ={input.phone}
              onChange ={handler}
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
               value ={input.password}
              onChange ={handler}
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
              <Input type="radio" name="role" vlaue="student"/>
                <Label htmlFor="student" className="text-base">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input type="radio" name="role" vlaue="recuriter"/>
                
                <Label htmlFor="recruiter" className="text-base">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="profile" className="text-lg font-medium">
              Profile
            </Label>
            <Input id="profile" type="file" className="mt-2 text-base" />
          </div>

          <Button className="w-full mt-4 py-6 text-lg font-semibold" type="submit">
            Signup
          </Button>

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
