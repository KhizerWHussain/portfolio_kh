import { aboutPropertiesLinks } from "@/data/header";
import React from "react";
import dynamic from "next/dynamic";
const Properties = dynamic(() => import("./properties"), { ssr: true });
const Profile = dynamic(() => import("./profile"), { ssr: true });
const Tabber = dynamic(() => import("./tabber"), { ssr: true });

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex pl-0 pr-0 md:pl-36 md:pr-36 bg-white text-for w-full h-full justify-center align-middle pt-32 pb-32"
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full align-middle justify-center mb-8">
          <h1 className="font-bold text-[44px] underline text-gray-800">
            About Me
          </h1>
        </div>
        <div className="flex flex-col flex-1 md:flex-row lg:flex-row w-full justify-between h-[90vh] md:h-full">
          {aboutPropertiesLinks.map((item: any, i: number) => (
            <Properties key={i} item={item} index={i} />
          ))}
        </div>
        <div className="flex w-full justify-between align-middle mt-20 h-[100vh] md:h-full flex-col md:flex-row">
          <Profile />
          <Tabber />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
