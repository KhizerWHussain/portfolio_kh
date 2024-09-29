import React from "react";

const Properties = ({ item }: any) => {
  const { title, icon, description } = item;
  return (
    <div className="flex flex-col gap-1.5 text-for align-middle justify-center text-center">
      <div className="flex text-center w-full align-middle justify-center">
        <div className="bg-secondary p-8 rounded-full">{icon}</div>
      </div>
      <h1 className="font-semibold text-[24px] text-gray-700">{title}</h1>
      <p className="font-thin text-[16px] text-gray-500 pr-8 pl-8">
        {description}
      </p>
    </div>
  );
};

export default Properties;
