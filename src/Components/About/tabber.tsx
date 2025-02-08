"use client";
import React, { useState } from "react";
import Skills from "./Tabs/skills";
import Education from "./Tabs/education";
import Experience from "./Tabs/experience";

const Tabber = () => {
  const [activeTab, setActiveTab] = useState<string>("skills");

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      default:
        return <Skills />;
    }
  };

  const btnArray: { text: string; slug: string }[] = [
    { text: "Skills", slug: "skills" },
    { text: "Education", slug: "education" },
    { text: "Experience", slug: "experience" },
  ];

  return (
    <div className="w-[100vw] md:w-[50%] h-full">
      <div className="flex justify-between md:justify-around border-b w-full pr-4 pl-4 md:pl-0 md:pr-0">
        {btnArray.map((tab) => (
          <button
            key={tab.slug}
            className={`p-2 transition duration-500 text-[22px] md:text-[14px] min-w-[30%] ${
              activeTab === tab.slug
                ? "text-secondary font-black"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.slug)}
          >
            {tab.text}
          </button>
        ))}
      </div>
      <div className="p-4 w-full min-h-72 md:min-h-full">{renderContent()}</div>
    </div>
  );
};

export default Tabber;
