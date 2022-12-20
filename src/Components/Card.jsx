import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ value, handleDelete, handledit, click, handleClick, id }) {
  const { img, title, _id } = value;

  function handledelete(params) {
    handleDelete(_id);
  }

  return (
    <article className="p-6 rounded-lg shadow-lg bg-white w-fulls">
      <div className="p-6 rounded-lg shadow-lg bg-white w-full disabled:text-purple-300 flex justify-between items-center ">
        <Link to={`store/${_id}`}>
          <img src={img} className="w-12" />
          <h1>{title}</h1>
        </Link>
        <h2 className="text-4 cursor-pointer" onClick={() => handleClick(id)}>
          click
        </h2>
      </div>

      {click === id ? (
        <>
          {" "}
          <br />
          <Edit
            handledelete={handledelete}
            handledit={() => handledit(value)}
          />{" "}
        </>
      ) : (
        ""
      )}
    </article>
  );
}

function Edit({ handledelete, handledit }) {
  return (
    <>
      <button className="p-4 . bg-red-400 mr-4" onClick={handledit}>
        Edits
      </button>
      <button className="p-4 . bg-blue-400" onClick={handledelete}>
        Delete
      </button>
      {/* <button>Click</button> */}
    </>
  );
}

export default Card;
