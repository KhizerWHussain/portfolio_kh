"use client";
import React from "react";
import CustomImage from "../../CustomImage";
import { skillsData } from "@/Data/header";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex flex-wrap h-full w-full justify-between">
      <div className="flex flex-wrap h-full w-full justify-between">
        {skillsData.map((skill: any, i: number) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.1,
                delay: i * 0.1,
                ease: "easeInOut",
              },
            }}
            className="relative group m-2 flex items-center justify-center w-28 mt-2 over:scale-125 transition-transform duration-500 transform"
          >
            <div className="h-15 w-15 object-contain hover:scale-105 transtion duration-300">
              <CustomImage
                image={skill.icon}
                alt={skill.name}
                height={60}
                width={60}
                loadingEase="eager"
                havePriority={false}
                optimize={true}
                styles={{
                  height: 100,
                  maxHeight: 100,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
