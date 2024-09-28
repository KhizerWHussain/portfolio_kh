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

  const btnArray = [
    { text: "Skills", slug: "skills" },
    { text: "Education", slug: "education" },
    { text: "Experience", slug: "experience" },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex justify-around border-b">
        {btnArray.map((btn) => (
          <button
            key={btn.slug}
            className={`p-2 transition duration-500 ${
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
      <div className="p-4">{renderContent()}</div>
    </div>
  );
};

export default Tabber;
