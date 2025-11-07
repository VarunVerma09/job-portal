import { Badge } from "@/components/ui/badge";
import React from "react";

function LatestJobCard() {
  return (
    <div className="p-5 rounded-xl shadow-md bg-white border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
      {/* Company Info */}
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Company Name</h2>
        <p className="text-sm text-gray-500">India</p>
      </div>

      {/* Job Title */}
      <div className="mb-3">
        <h3 className="text-base font-medium">Job Title</h3>
        <p className="text-sm text-gray-600 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          tempora.
        </p>
      </div>

      {/* Badges Section */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge variant="ghost" className={" text-blue-700 font-bold"}>
          12 Positions
        </Badge>
        <Badge
          className={"text-red-700 font-bold"} 
          variant="ghost"
        >
          Part Time
        </Badge>
        <Badge
          className={"text-purple-700 font-medium"}
          variant="ghost"
        >
          2 LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCard;
