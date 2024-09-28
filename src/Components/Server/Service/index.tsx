"use client";
import { servicesDataArray } from "@/Data/header";
import React from "react";
import CustomImage from "../CustomImage";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { y: 100, opacity: 0 }, // Start 100px below and hidden
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20, duration: 2 }, // 2 seconds transition
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-600">My Services</h2>
        <div className="flex flex-wrap align-middle justify-center w-full">
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap align-middle justify-center w-full"
          >
            {servicesDataArray.map((service: any, i: number) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-lg p-6 m-4 w-full md:w-1/3 transition-transform duration-500 transform hover:scale-105 hover:bg-secondary hover:text-white cursor-pointer flex flex-col justify-between align-middle"
              >
                <div className="relative flex items-center justify-center h-24 w-full mb-4">
                  <CustomImage
                    image={service.icon}
                    alt={service.title}
                    height={80}
                    width={80}
                    className="max-w-full max-h-full object-contain text-center"
                    loadingEase="lazy"
                    havePriority={false}
                    optimizeImage={true}
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <h3 className="text-xl font-semibold mb-4 text-gray-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
