import React from "react";
import style from "../SingleCard/card.module.css";
import CustomImage from "@/Components/Server/CustomImage";

const FrontCard = ({ item }: any) => {
  return (
    <div className={`${style.flip_card_front}`}>
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
  );
};

export default FrontCard;
