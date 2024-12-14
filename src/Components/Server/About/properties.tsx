"use client";
import React from "react";
import { motion } from "framer-motion";

interface PropertiesProp {
  item: { title: string; icon: any; description: string };
  index: number;
}

function getXAxisPosition(index: number): number {
  switch (index) {
    case 0:
      return 100;
    case 1:
      return 200;
    case 2:
      return 300;
    case 3:
      return 400;
  }
}

const Properties = ({ item, index }: PropertiesProp) => {
  const { title, icon, description } = item;
  return (
    <motion.div
      initial={{ x: getXAxisPosition(index), opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: index * 0.15 },
      }}
      viewport={{ once: true }}
      className="flex w-full flex-col gap-2 text-for align-middle justify-center text-center"
    >
      <div className="flex text-center w-full align-middle justify-center">
        <div className="bg-secondary p-8 rounded-full hover:scale-110 duration-300">
          {icon}
        </div>
      </div>
      <h1 className="font-semibold text-[24px] text-gray-700 mt-2">{title}</h1>
      <p className="font-thin text-[16px] text-gray-500 pr-8 pl-8">
        {description}
      </p>
    </motion.div>
  );
};

export default Properties;
