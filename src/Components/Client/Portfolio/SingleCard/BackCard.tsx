import React from "react";
import style from "../SingleCard/card.module.css";

const BackCard = () => {
  return (
    <div
      className={`${style.flip_card_back} bg-blue-600 text-white rounded-lg shadow-md`}
    >
      <div className="p-6 flex justify-center items-center flex-col">
        <svg
          stroke="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          height="50px"
          width="50px"
          fill="#ffffff"
        >
          <path d="M20.84375 0.03125..."></path>
        </svg>
        <strong className="mt-4">Hover Me</strong>
      </div>
    </div>
  );
};

export default BackCard;
