import React from "react";
import { formatNumber } from "../../utils";

const CardItem = ({ title, number, color = "gray" }) => {
  return (
    <div
      className={`border rounded text-center m-4 w-56 h-40 flex flex-col justify-center items-center shadow-lg p-4 text-${color}-600 bg-white`}
    >
      <h2 className="font-sans  text-3xl font-bold">{formatNumber(number)}</h2>
      <hr className="w-full" />
      <h1
        className="font-serif text-xl font-bold capitalize
      mt-4"
      >
        {title}
      </h1>
    </div>
  );
};

export default CardItem;
