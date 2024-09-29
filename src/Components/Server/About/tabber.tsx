"use client";
import React, { useEffect, useRef, useState } from "react";
import Skills from "./Tabs/skills";
import Education from "./Tabs/education";
import Experience from "./Tabs/experience";
import { useAnimation, useInView } from "framer-motion";

const Tabber = () => {
  const [activeTab, setActiveTab] = useState<string>("skills");

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return <Skills controls={controls} />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      default:
        return <Skills />;
    }
  };

  const btnArray = [
    { text: "Skills", slug: "skills" },
    { text: "Education", slug: "education" },
    { text: "Experience", slug: "experience" },
  ];

  return (
    <div className="w-[100vw] md:w-[50%] h-full" ref={ref}>
      <div className="flex justify-between md:justify-around border-b w-full pr-4 pl-4 md:pl-0 md:pr-0">
        {btnArray.map((btn) => (
          <button
            key={btn.slug}
            className={`p-2 transition duration-500 text-[22px] md:text-[14px] min-w-[30%] ${
              activeTab === btn.slug
                ? "text-secondary font-black"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab(btn.slug)}
          >
            {btn.text}
          </button>
        ))}
      </div>
      <div className="p-4 w-full min-h-72 md:min-h-full">{renderContent()}</div>
    </div>
  );
};

export default Tabber;