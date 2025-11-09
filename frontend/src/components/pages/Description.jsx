import React, { useState } from "react";

const Description = () => {
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    alert("You have applied for this job!");
  };

  return (
    <div className="w-[80%] mx-auto mt-10">
      {/* Title & Positions */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Title</h1>
        <div className="flex gap-2">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm font-medium">
            12 Positions
          </span>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm font-medium">
            12 Positions
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm font-medium">
            12 Positions
          </span>
        </div>
        <button
          disabled={isApplied}
          onClick={handleApply}
          className={`rounded-lg px-5 py-2 text-white font-medium ${
            isApplied
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </button>
      </div>

      {/* Job Description */}
      <h1 className="border-b-2 border-gray-300 font-medium py-3 text-lg">
        Job Description
      </h1>

      <div className="mt-4 space-y-3">
        <h1 className="font-bold">
          Role:
          <span className="font-normal pl-2">Frontend Developer</span>
        </h1>
        <h1 className="font-bold">
          Location:
          <span className="font-normal pl-2">Hyderabad</span>
        </h1>
        <h1 className="font-bold">
          Description:
          <span className="font-normal pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h1>
        <h1 className="font-bold">
          Experience:
          <span className="font-normal pl-2">2 yrs</span>
        </h1>
        <h1 className="font-bold">
          Salary:
          <span className="font-normal pl-2">12LPA</span>
        </h1>
        <h1 className="font-bold">
          Total Applicants:
          <span className="font-normal pl-2">4</span>
        </h1>
        <h1 className="font-bold">
          Posted Date:
          <span className="font-normal pl-2">29-12-2024</span>
        </h1>
      </div>
    </div>
  );
};

export default Description;
