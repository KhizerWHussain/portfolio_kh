"use client";
import React, { useState } from "react";
import { portfolioDataArray } from "@/Data/header";
import SingleProject from "./list";
import DetailModal from "./list/model";

const Projects = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const modelComponent = () => {
    if (!showModal && !selectedProject) {
      return null;
    }
    return (
      <DetailModal closeModal={closeModal} selectedProject={selectedProject} />
    );
  };

  return (
    <>
      <div
        id="portfolio"
        className="bg-black py-12 flex min-h-screen max-h-full w-screen pl-0 pr-0 md:pl-36 md:pr-36 text-white last:items-center justify-center"
      >
        <div className="flex flex-col gap-6 w-full h-full max-w-full">
          <h1 className="font-bold text-[44px] underline text-gray-100 text-center">
            Projects
          </h1>
          <div className="flex justify-center items-center flex-wrap h-full w-full gap-4">
            {portfolioDataArray.map((item: any, i: number) => (
              <SingleProject key={i} item={item} onClick={openModal} />
            ))}
          </div>
        </div>
      </div>
      <div>{modelComponent()}</div>
    </>
  );
};

export default Projects;
