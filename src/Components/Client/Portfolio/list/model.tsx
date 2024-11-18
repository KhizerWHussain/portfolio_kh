import CustomImage from "@/Components/Server/CustomImage";
import Link from "next/link";
import React from "react";

interface DetailModal {
  closeModal: () => void;
  selectedProject: any;
}

const DetailModal = ({ closeModal, selectedProject }: DetailModal) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-black w-full md:w-[40%] p-6 rounded-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
        >
          &times;
        </button>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white text-center pb-2 border-b-[1px] border-b-gray-400 border-opacity-45">
            {selectedProject.name}
          </h2>
          <p className="text-base text-gray-400">{selectedProject.desc}</p>
          <p className="text-gray-700">{selectedProject.description}</p>
          <h3 className="text-sm text-gray-400">
            duration: {`(${selectedProject.duration})`}
          </h3>
          <h3 className="font-semibold text-gray-200">Tech Used:</h3>
          <div className="w-full flex flex-wrap items-center justify-start gap-2">
            {selectedProject.techUsed.map((tech: any, i: number) => (
              <CustomImage
                key={i}
                image={tech.image}
                alt={tech.name || "tech"}
                className="w-10 h-10 hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
          <h3 className="font-semibold text-gray-200">Links:</h3>
          <div className="w-full flex flex-wrap items-center justify-start gap-2">
            {selectedProject.links.map((item: any, i: number) => (
              <Link href={item.url} target="_blank" key={i}>
                <CustomImage
                  image={item.image}
                  alt={item.name || "link"}
                  className="w-10 h-10 hover:scale-105 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
