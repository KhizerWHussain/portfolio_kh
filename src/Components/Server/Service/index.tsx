"use client";
import { servicesDataArray } from "@/Data/header";
import React from "react";
import CustomImage from "../CustomImage";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="font-bold text-[44px] underline text-gray-800">
          Services
        </h1>
        <div className="flex flex-wrap align-middle justify-center w-full h-full">
          {servicesDataArray.map((service: any, i: number) => (
            <motion.div
              key={i}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.15,
                delay: i * 0.5,
                ease: "anticipate",
              }}
              viewport={{ once: true }}
              className="bg-white shadow-lg group rounded-lg p-6 m-4 w-full md:w-[30%] transition-all duration-500 transform hover:scale-105 hover:bg-secondary hover:text-white cursor-pointer flex flex-col justify-between align-middle"
            >
              <div className="relative flex items-center justify-center h-24 w-full mb-4">
                <CustomImage
                  image={service.icon}
                  alt={service.title}
                  height={80}
                  width={80}
                  className="max-w-full max-h-full object-contain text-center"
                  loadingEase="eager"
                  havePriority={true}
                  optimize={true}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
