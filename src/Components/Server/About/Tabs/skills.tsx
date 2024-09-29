import React from "react";
import CustomImage from "../../CustomImage";
import { skillsData } from "@/Data/header";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20, duration: 2 },
  },
};

const Skills = ({ controls }: any) => {
  return (
    <div className="flex flex-wrap h-full w-full justify-between">
      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap h-full w-full justify-between"
      >
        {skillsData.map((skill: any, i: number) => (
          <div
            className="relative group m-2 flex items-center justify-center w-28 mt-2 over:scale-125 transition-transform duration-500 transform"
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
