import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowLeft, ArrowRight } from "lucide-react"
import Category from './Category'

function HeroSection() {

  return (
   <section className="flex flex-col items-center justify-center   px-10 py-20 text-center">
      <Badge className="bg-orange-100 text-orange-600 text-xl font-medium  mb-4 px-4 py-1 rounded-full">
        No. 1 Job Hunt Website
      </Badge>

      <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 leading-tight max-w-3xl">
        Search, Apply &
        <br /> Get Your{" "}
        <span className="text-purple-600">Dream Jobs</span>
      </h1>

      <p className="text-gray-500 mt-4 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores sit amet esse fuga!
      </p>

      <div className="flex items-center bg-white shadow-lg rounded-full mt-5 px-4 py-3 w-full md:max-w-3xl">
        <Input
          type="text"
          placeholder="Find your dream jobs"
          className="border-0 text-xl focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
        />
        <Button className="rounded-full cursor-pointer h-10 w-20 bg-purple-600 hover:bg-purple-700">
          <Search className=" text-white" />
        </Button>
      </div>

      <div className="flex items-center gap-6 mt-10">
        <div className="flex gap-4">
         <Category/>
        </div>      
      </div>

     
    </section>
  )
}

export default HeroSection