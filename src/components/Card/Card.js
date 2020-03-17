import React from "react";
import CardItem from "./CardItem";

const Card = ({ data }) => {
  const { confirmed, recovered, deaths } = data;

  return (
    <div className="flex flex-wrap flex-col justify-center items-center md:flex-row">
      <CardItem number={confirmed.value} title="Confirmed" color="black" />
      <CardItem number={deaths.value} title="Deaths" color="red" />
      <CardItem number={recovered.value} title="Recovered" color="green" />
    </div>
  );
};

export default Card;
