import React from "react";
import style from "../SingleCard/card.module.css";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const Project = ({ item }: any) => {
  return (
    <div className={`${style.flip_card} mb-6`}>
      <div className={style.flip_card_inner}>
        <FrontCard item={item} />
        <BackCard item={item} />
      </div>
    </div>
  );
};

export default Project;
