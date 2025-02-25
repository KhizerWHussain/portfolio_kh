"use client";
import React, { useMemo, useState } from "react";
import { portfolioDataArray } from "@/data";
import SingleProject from "./list";
import DetailModal from "./list/model";

interface ProjectType {
  id: number;
  name: string;
  companyProject: boolean;
  slug: string;
  type: string[];
  duration: string;
  desc: string;
  techUsed: { name: string; image: any }[];
  thumbnail: any;
  links: { url: string; image: any }[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const modelComponent = useMemo(() => {
    if (!selectedProject) {
      return null;
    }
    return (
      <DetailModal closeModal={closeModal} selectedProject={selectedProject} />
    );
  }, [selectedProject]);

  return (
    <>
      <div
        id="portfolio"
        className="bg-black py-20 min-h-screen flex flex-col w-screen pl-0 pr-0 md:pl-36 md:pr-36 text-white justify-center items-center"
      >
        <div className="flex flex-col gap-4 w-full h-full max-w-full justify-center items-center">
          <h1 className="font-bold text-[44px] underline text-gray-100 text-center">
            Projects
          </h1>
          <div className="flex justify-between items-center flex-wrap h-full w-full gap-6 mt-4">
            {portfolioDataArray.map((item: any, i: number) => (
              <SingleProject
                key={i}
                item={item}
                onClick={openModal}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
      {modelComponent}
    </>
  );
};

export default Projects;
