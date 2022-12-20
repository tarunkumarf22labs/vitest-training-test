import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails ";
import RouteBODY from "./Components/Route";
import Pagination from "./Components/Pagination";
import { Datacontextcreator } from "./Context/DataContext";

function App() {
  const {
    cart,
    setcart,
    form,
    first,
    setfirst,
    setform,
    curretpage,
    setcurrentpage,
  } = useContext(Datacontextcreator);
  // const [first, setfirst] = useState([]);
  // const [cart, setcart] = useState([]);

  const postperpage = 3;
  const [totalpage, settotalpage] = useState(0);
  const lastpostindex = curretpage * postperpage;
  const fistpageIndex = lastpostindex - postperpage;

  let apilength;
  function addcart(data) {
    if (cart.find((e) => e._id === data._id)) {
      return;
    }
    setcart((prev) => [...prev, { ...data, count: 1 }]);
  }

  async function datafetch() {
    let val = await fetch(
      "https://kiranastore-upload-backend-f22labs.onrender.com/products"
    );
    let data = await val.json();
    apilength = data.count;
    setfirst(data.data);
    settotalpage(data.count);
    // api
  }

  function handleCount(val, id) {
    let exist = cart.find((e) => e._id === id);
    if (exist && val === "+") {
      setcart(
        cart.map((x) => {
          return x._id === id ? { ...exist, count: exist.count + 1 } : x;
        })
      );
    } else if (val === "-") {
      setcart(
        cart.map((x) => {
          return x._id === id ? { ...exist, count: exist.count - 1 } : x;
        })
      );
      if (exist.count === 1) {
        setcart(cart.filter((e) => e._id !== id));
        return;
      }
    }

    //  setcart((e) => e.find() )
  }

  useEffect(() => {
    datafetch();
    console.log("dispatched");
  }, [form]);

  function handleDelete(id) {
    fetch(
      `https://kiranastore-upload-backend-f22labs.onrender.com/products/${id}`,
      {
        method: "DELETE",
      }
    ).then((e) => {
      console.log(e);
    });

    setTimeout(() => {
      setform({ title: "" });
    }, 2000);
  }

  const currentval = first.slice(fistpageIndex, lastpostindex);
  return (
    <div>
      <Router>
        <Navbar cart={cart} />
        <RouteBODY
          first={currentval}
          totalpage={totalpage}
          addcart={addcart}
          cart={cart}
          handleCount={handleCount}
          handleclick={(e) => setcurrentpage(e)}
          curretpage={curretpage}
          handleDelete={handleDelete}
        />
      </Router>
    </div>
  );
}

export default App;
