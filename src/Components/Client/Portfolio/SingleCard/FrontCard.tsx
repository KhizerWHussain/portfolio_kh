import React from "react";
import style from "../SingleCard/card.module.css";
import CustomImage from "@/Components/Server/CustomImage";

const FrontCard = ({ item }: any) => {
  return (
    <div className={`${style.flip_card_front}`}>
      <div className="p-2 flex justify-center items-center rounded-[2em] w-full h-full">
        <CustomImage
          alt="Project"
          image={item.thumbnail.src}
          className="w-full h-full object-contain rounded-[2em] justify-center items-center"
          blurDataURL={item.thumbnail.blurDataURL}
          fetchPriority="high"
          imageQuality={100}
          havePriority={true}
          optimizeImage={true}
        />
      </div>
    </div>
  );
};

export default FrontCard;
