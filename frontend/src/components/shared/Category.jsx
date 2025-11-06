import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

function Category() {
  const category = [
    "Frontend developer",
    "Backend developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
  ];

  return (
    <Carousel className="w-full mt-8  max-w-lg">
      <CarouselContent >
        {category.map((item,indx) => (
          <CarouselItem >
           <Button variant="outline" key={indx} className="rounded-full px-6 h-13 py-4 font-medium">
            {item}
          </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-10 w-10 cursor-pointer" />
      <CarouselNext className="h-10 w-10 cursor-pointer" />
    </Carousel>
  );
}

export default Category;
