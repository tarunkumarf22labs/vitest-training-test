import React from "react";
import { NavLink } from "react-router-dom";

function Card({ value }) {
  const { Img, Title } = value;
  console.log(value);
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white w-full disabled:text-purple-300 ">
      <img src={Img} className="w-12" />
      <h1>{Title}</h1>
    </div>
  );
}

export default Card;
