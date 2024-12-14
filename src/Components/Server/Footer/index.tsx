import React from "react";
import FooterItems from "./Items";

const Footer = () => {
  return (
    <div className="bg-black text-white h-32 w-full justify-between align-middle flex items-center overflow-hidden flex-col py-4">
      <div className="flex flex-1 justify-between items-center gap-6">
        <FooterItems />
      </div>
      <div className="text-gray-400 font-thin text-[14px]">
        Khizer Hussain <span className="text-primary">&#64; 2024</span>
      </div>
    </div>
  );
};

export default Footer;
