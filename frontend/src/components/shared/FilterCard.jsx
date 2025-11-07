import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Noida", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Noida", "Pune", "Mumbai"],
  },
  {
    filterType: "Salary",
    array: ["20k-40k", "42k-80k", "82k-1 lakh", "1 lakh - 2 lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="filter-card-container p-4 h-[100%] border ">
      <h1 className="text-xl font-bold mb-2">Filter Jobs</h1>
      <hr className="mb-4" />

      {filterData.map((data, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold text-lg mb-2">{data.filterType}</h2>

          <RadioGroup>
            {data.array.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center space-x-2 mb-1">
                <RadioGroupItem
                  value={item}
                  id={`radio-${data.filterType}-${itemIndex}`}
                />
                <Label htmlFor={`radio-${data.filterType}-${itemIndex}`}>
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
