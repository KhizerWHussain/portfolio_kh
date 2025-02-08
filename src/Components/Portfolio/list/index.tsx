import CustomImage from "@/Custom/CustomImage";
import React from "react";
import { motion } from "framer-motion";

const SingleProject = ({ item, onClick, index }: any) => {
  return (
    <motion.div
      className="h-60 w-80"
      initial={{ opacity: 0, scale: 0.25, filter: "blur(6px)" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.25, delay: index * 0.15, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
    >
      <div className="relative rounded-md hover:scale-105 transition duration-300">
        <CustomImage
          alt="Project"
          image={item.thumbnail.src}
          className="w-80 h-60 min-h-full object-cover hover:shadow-gray-800"
          blurDataURL={item.thumbnail.blurDataURL}
          fetchPriority="high"
          imageQuality={100}
          havePriority={true}
          optimize={true}
          loadingEase="lazy"
          click={() => onClick(item)}
        />
        <div className="bg-gray-700 absolute left-0 bottom-0 w-full opacity-60 p-2 z-0">
          <p className="opacity-100 font-medium text-white text-base z-10">
            {item.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
