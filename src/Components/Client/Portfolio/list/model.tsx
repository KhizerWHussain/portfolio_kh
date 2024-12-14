import CustomImage from "@/Components/Server/CustomImage";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface DetailModal {
  closeModal: () => void;
  selectedProject: any;
}

const DetailModal = ({ closeModal, selectedProject }: DetailModal) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        className="bg-black w-full md:w-[40%] p-6 rounded-lg shadow-lg relative overflow-hidden"
        initial={{ scale: 0.5 }}
        whileInView={{
          scale: 1.2,
          transition: { duration: 0.4, ease: "linear", bounce: 0.75 },
        }}
      >
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
          <p className="cursor-pointer text-base text-gray-400 hover:text-gray-300">
            {selectedProject.desc}
          </p>
          <h3 className="text-sm text-gray-400">
            duration: {`(${selectedProject.duration})`}
          </h3>
          <h3 className="font-semibold text-gray-200">Tech Used:</h3>
          <div className="w-full flex flex-wrap items-center justify-start gap-2 overflow-hidden">
            {selectedProject.techUsed.map((tech: any, i: number) => (
              <motion.div
                key={i}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  },
                }}
              >
                <CustomImage
                  image={tech.image}
                  alt={tech.name || "tech"}
                  className="w-10 h-10 hover:scale-105 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
          <h3 className="font-semibold text-gray-200">Links:</h3>
          <div className="w-full flex flex-wrap items-center justify-start gap-2">
            {selectedProject.links.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  },
                }}
              >
                <Link href={item.url} target="_blank">
                  <CustomImage
                    image={item.image}
                    alt={item.name || "link"}
                    className="w-10 h-10 hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailModal;
