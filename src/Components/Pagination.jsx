import React from "react";

function Pagination({ totalpost = 16, postperpage = 3, handleclick }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center w-full mt-4">
      <div className="w-full flex justify-center items-center">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              className="bg-black text-white p-4  rounded-full"
              onClick={() => handleclick(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
