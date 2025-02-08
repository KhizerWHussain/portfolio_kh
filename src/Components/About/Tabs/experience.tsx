import { experienceDataArray } from "@/data/header";
import React from "react";

const Experience = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      {experienceDataArray.map((item: any, i: number) => (
        <div key={i} className="bg-gray-50 p-4 rounded-md">
          <div className="flex justify-between w-full">
            <p className="text-[28px] text-gray-700">{item.job}</p>
            <p className="text-secondary text-[14px]">{item.durationTime}</p>
          </div>
          <div className="text-black font-bold text-[12px]">{item.company}</div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
