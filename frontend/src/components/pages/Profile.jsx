import React, { useState } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppliedJobTable from "./AppliedJobTable";
import Navbar from "../shared/Navbar";
import UpdateProfile from "./UpdateProfile";

const skills = ["HTML", "CSS", "JAVASCRIPT", "REACTJS"];

const Profile = () => {
     const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-2xl shadow-sm my-8 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
                alt="Profile"
              />
            </Avatar>

            {/* Profile Details */}
            <div>
              <h2 className="text-2xl font-semibold">Full Name</h2>
              <p className="text-gray-600 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                tempora a provident, asperiores qui minus quia! Ex velit aut
                consectetur beatae perspiciatis earum adipisci.
              </p>

              {/* Email & Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>9999999999</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-black text-white rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Resume</h3>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  UserResume
                </a>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <Button variant="outline"   onClick={() => setOpen(true)} className="rounded-full">
            <Pen className="w-4 h-4 mr-1" /> Edit
          </Button>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="max-w-6xl mx-auto my-10 ">
        <AppliedJobTable />
      </div>
      <UpdateProfile className="" open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
