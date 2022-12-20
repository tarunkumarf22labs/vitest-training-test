import React from "react";

function CartCard({ value, handleCount }) {
  const { description, Img, Title, _id, count } = value;
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white w-full flex justify-between">
      <div>
        <img src={Img} className="w-12" />
        <h1>{Title}</h1>
      </div>

      <div>
        <button
          className="border-2 border-black px-2 py-1 mt-4"
          onClick={() => handleCount("-", _id)}
        >
          -
        </button>
        <span className="px-2"> {count}</span>
        <button
          className="border-2 border-black px-2 py-1 mt-4"
          onClick={() => handleCount("+", _id)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartCard;
