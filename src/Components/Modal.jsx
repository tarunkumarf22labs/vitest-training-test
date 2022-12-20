import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({
  children = "Sahi",
  close,
  show = true,
  modalval,
  setmodalval,
  handleChange,
  handleedit,
}) {
  // console.log(modalval);
  return (
    <>
      {show ? (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-10 opacity-1 "
          onClick={() => close()}
        >
          <div
            className="w-fit p-8 rounded-lg shadow-lg bg-white  "
            onClick={(e) => e.stopPropagation()}
          >
            <header className="modal_header">
              {/* <h2 className="modal_header-title">{title}</h2> */}
              {/* <button className="close" onClick={() => close()}>
             <img src={Close} alt="close" />
           </button> */}
            </header>
            <main className="modal_content">
              <input
                type="text"
                value={modalval.title}
                name="title"
                id="title"
                placeholder="title"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <input
                type="text"
                value={modalval.price}
                name="price"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <textarea
                value={modalval.description}
                name="description"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <button onClick={() => handleedit(modalval._id)}>
                Edit value
              </button>
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
