import React from "react";
import Project from "./SingleCard";
import { portfolioDataArray } from "@/Data/header";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="mt-8 mb-8 p-8 flex min-h-screen w-screen pl-0 pr-0 md:pl-36 md:pr-36 text-white align-middle items-center justify-center"
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-[44px] underline text-gray-100 text-center">
          Projects
        </h1>
        <div className="flex justify-between items-center flex-wrap">
          {portfolioDataArray.map((item: any, i: number) => (
            <Project key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
