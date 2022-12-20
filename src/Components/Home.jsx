import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Datacontextcreator } from "../Context/DataContext";
import Card from "./Card";
import Modal from "./Modal";
import Pagination from "./Pagination";
import qs from "qs";

function Home({ data, postperpage, handleclick, totalpage, handleDelete }) {
  const { setform, setfirst, first } = useContext(Datacontextcreator);
  const [click, setclick] = useState(false);
  const [modal, setmodal] = useState(false);
  const [modalval, setmodalval] = useState({});
  const [input, setinput] = useState("");
  const query = qs.stringify({ title: input.trim() });
  async function papaaa() {
    let sahi = await fetch(
      `https://kiranastore-upload-backend-f22labs.onrender.com/products?${query}`
    );
    let papa = await sahi.json();
    console.log(papa);
    setfirst(papa.data);
  }

  //  const deb = useCallback(() => {
  //     setTimeout(() => {

  //     }, 1000);
  //  },[])

  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) {
  //       clearTimeout(timer );
  //     }
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, ...args);
  //     }, 1000);
  //   };
  // };

  // let optimizedfn = useCallback(() => {
  //   debounce(papaaa());
  // }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("triggerd");
      papaaa(input);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input]);

  if (data?.length === 0) {
    return "loading";
  }

  function handlemodal(e) {
    setmodal((prev) => !prev);
    setmodalval(e);
  }

 

  function close() {
    console.log("off");
    setmodal(false);
  }

  function handleedit(id) {
    fetch(
      `https://kiranastore-upload-backend-f22labs.onrender.com/products/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(modalval),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((e) => {
      console.log(e);
    });
    setTimeout(() => {
      console.log("ooh");
      setform({});
    }, 2000);
  }

  function handleClick(index) {
    console.log("sahi");
    setclick((prev) => !prev);
    if (click === index) {
      return setclick(false);
    }
    setclick(index);
  }

   function handleChange(e) {
     setmodalval({
       ...modalval,
       [e.target.name]: e.target.value,
     });
   }
  const val = data.map((e, i) => {
    return (
      <div key={e.id} className="disabled:bg-slate-500">
        {/* <NavLink to={`store/${e._id}`}> */}
        <Card
          value={e}
          click={click}
          setclick={setclick}
          handleDelete={(id) => handleDelete(id)}
          handledit={handlemodal}
          handlemodal={handlemodal}
          handleClick={handleClick}
          id={i}
        />
        {/* </NavLink> */}
      </div>
    );
  });

  return (
    <div className="relative">
      <input
        className="w-full p-5"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <section className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 sm:grid-cols-2   ">
        {val}
      </section>

      <Pagination
        totalpost={first.length}
        postperpage={postperpage}
        handleclick={handleclick}
      />
      <Modal
        modalval={modalval}
        show={modal}
        setmodalval={setmodalval}
        handleChange={handleChange}
        handleedit={(id) => handleedit(id)}
        close={close}
      />
    </div>
  );
}

export default Home;
