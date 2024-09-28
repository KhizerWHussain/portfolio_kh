"use client";
import React from "react";
import CustomImage from "../../CustomImage";
import { skillsData } from "@/Data/header";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { y: 100, opacity: 0 }, // Start 100px below and hidden
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20, duration: 2 }, // 2 seconds transition
  },
};

const Skills = () => {
  return (
    <div className="flex flex-wrap h-full w-full justify-between">
      <motion.div
        // className="relative group m-2 flex items-center justify-center w-28 mt-2 hover:scale-125 transition-transform duration-500 transform"
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap h-full w-full justify-between"
      >
        {skillsData.map((skill: any, i: number) => (
          <div
            className="relative group m-2 flex items-center justify-center w-28 mt-2 hover:scale-125 transition-transform duration-500 transform"
            key={i}
          >
            <div className="h-15 w-15 object-contain">
              <CustomImage
                image={skill.icon}
                alt={skill.name}
                height={60}
                width={60}
                loadingEase="lazy"
                havePriority={false}
                optimizeImage={true}
                styles={{
                  height: 100,
                  maxHeight: 100,
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
