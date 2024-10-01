import React from "react";
import Project from "./SingleCard";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="mt-8 mb-8 p-8 flex h-[100vh] min-h-screen w-screen pl-0 pr-0 md:pl-36 md:pr-36 text-white align-middle items-center justify-center"
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-[44px] underline text-gray-100 text-center">
          Projects
        </h1>
        <div className="flex justify-between w-full items-center flex-wrap">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Projects;
