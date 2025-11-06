import React from 'react'
import LatestJobCard from './LatestJobCard'

const randomsJob = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function LatestJob() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
        <span className="text-purple-600">Latest & Top </span>
        Job Openings
      </h1>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {randomsJob.slice(0, 6).map((item, indx) => (
          <LatestJobCard key={indx} />
        ))}
      </div>
    </section>
  )
}

export default LatestJob
