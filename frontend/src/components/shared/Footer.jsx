import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-between border-t-2 px-20  border-gray-300">
      <div>
        <h1 className="font-bold">Job Hunt</h1>
        <p>@2025 Your Company. All Rights reserved</p>
      </div>
      <div className="flex gap-5 mt-3"><Instagram className="cursor-pointer"/> <Twitter className="cursor-pointer"/> <Linkedin className="cursor-pointer"/></div>
    </div>
  );
}

export default Footer;
