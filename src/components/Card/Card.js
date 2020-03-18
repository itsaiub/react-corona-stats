import React from "react";
import CardItem from "./CardItem";

const Card = ({ data }) => {
  const { confirmed, recovered, deaths } = data;

  return (
    <div className="flex flex-wrap justify-center items-center flex-row">
      <CardItem number={confirmed.value} title="Confirmed" color="orange" />
      <CardItem number={deaths.value} title="Deaths" color="red" />
      <CardItem number={recovered.value} title="Recovered" color="green" />
    </div>
  );
};

export default Card;
