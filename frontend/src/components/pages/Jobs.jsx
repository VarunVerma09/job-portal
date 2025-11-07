import React from 'react'
import Navbar from '../shared/Navbar'
import FilterCard from '../shared/FilterCard'
import { Job } from './Job'
import Footer from '../shared/Footer'


const Jobs = () => {
  return (
  <>
  <Navbar/>
  <div className='flex'>
    <div className='w-[20%]'><FilterCard/></div>

   <div className="min-h-screen bg-gray-50 px-10 py-10">
     

      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Job key={i} />
        ))}
      </div>
    </div>
  </div>
  
 
<Footer/>
  </>
  )
}

export default Jobs