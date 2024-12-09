import React from "react";

const Properties = ({ item }: any) => {
  const { title, icon, description } = item;
  return (
    <div className="flex flex-col gap-1.5 text-for align-middle justify-center text-center md:mb-0 mb-8">
      <div className="flex text-center w-full align-middle justify-center">
        <div className="bg-secondary p-8 rounded-full">{icon}</div>
      </div>
      <h1 className="font-semibold text-[24px] text-gray-900 pr-4 pl-4 md:pr-0 md:pl-0">
        {title}
      </h1>
      <p className="font-medium md:font-light text-lg text-gray-800 pr-8 pl-8 md:pr-4 md:pl-4">
        {description}
      </p>
    </div>
  );
};

export default Properties;
