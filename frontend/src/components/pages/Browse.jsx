import React from "react";
import Navbar from "../shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2,5, 45];

const Browse = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Result ({randomJobs.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomJobs.map((item, index) => {
            return <Job key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
