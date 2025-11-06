import { Badge } from 'lucide-react'
import React from 'react'

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, tempora.
        </p>
      </div>

      {/* Badges Section */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
          12 Positions
        </Badge>
        <Badge variant="outline" className="text-red-700 border-red-300 font-medium">
          Part Time
        </Badge>
        <Badge variant="outline" className="text-green-700 border-green-300 font-medium">
          2 LPA
        </Badge>
      </div>
    </div>
  )
}

export default LatestJobCard