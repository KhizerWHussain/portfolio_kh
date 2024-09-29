import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
      delay: 0.25,
    },
  },
};

const Properties = ({ item, controls }: any) => {
  const { title, icon, description } = item;
  return (
    <div className="flex flex-col gap-1.5 text-for align-middle justify-center text-center">
      <motion.div variants={imageVariants} initial="hidden" animate={controls}>
        <div className="flex text-center w-full align-middle justify-center">
          <div className="bg-secondary p-8 rounded-full">{icon}</div>
        </div>
        <h1 className="font-semibold text-[24px] text-gray-700">{title}</h1>
        <p className="font-thin text-[16px] text-gray-500 pr-8 pl-8">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Properties;
