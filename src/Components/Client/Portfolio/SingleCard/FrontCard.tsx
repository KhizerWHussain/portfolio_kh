import React from "react";
import style from "../SingleCard/card.module.css";
import CustomImage from "@/Components/Server/CustomImage";

const FrontCard = ({ item }: any) => {
  return (
    <div
      className={`${style.flip_card_front} bg-blue-600 text-white rounded-lg shadow-md flex w-full h-full justify-center items-center`}
    >
      <div className="p-6 flex justify-center items-center flex-col w-full h-full">
        {/* <CustomImage
          alt="Project"
          image={"https://via.placeholder.com/300"}
          className="w-full h-full object-cover rounded-lg"
        /> */}
        <h1>Hover me</h1>
      </div>
    </div>
  );
};

export default FrontCard;
