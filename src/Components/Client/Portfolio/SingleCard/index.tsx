import React from "react";
import style from "../SingleCard/card.module.css";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

const Project = () => {
  return (
    <div className={`${style.flip_card} w-[30vw] h-full overflow-hidden mb-2`}>
      <div className={style.flip_card_inner}>
        <FrontCard />
        <BackCard />
      </div>
    </div>
  );
};

export default Project;
