import React from 'react'

export const Job = () => {
  return (
   <div className="border  rounded-lg shadow-sm bg-white p-5 hover:shadow-md transition duration-200">
      <div className="flex  justify-between items-start">
        <div className="flex  items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="company logo"
            className="w-10 h-10"
          />
          <div>
            <h3 className="font-medium text-gray-800">Company Name</h3>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
        <p className="text-sm text-gray-400">2 days ago</p>
      </div>

      <h2 className="text-lg font-semibold mt-3">Title</h2>
      <p className="text-gray-500 text-sm mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          12 Positions
        </span>
        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
          Part Time
        </span>
        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
          2 LPA
        </span>
      </div>

      <div className="flex justify-between items-center mt-5">
        <button className="text-sm text-purple-700 font-medium hover:underline">
          Details
        </button>
        <button className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-700">
          Save For Later
        </button>
      </div>
    </div>
  )
}

export default Job
