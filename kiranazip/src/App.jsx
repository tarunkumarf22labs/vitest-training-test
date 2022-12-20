import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails ";
import RouteBODY from "./Components/Route";
import Pagination from "./Components/Pagination";
function App() {
  const [first, setfirst] = useState([]);
  const [cart, setcart] = useState([]);
  const [curretpage, setcurrentpage] = useState(1);
  const [postperpage, setpostperpage] = useState(3);
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
    setfirst(data.result);
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
  }, []);

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
        />
      </Router>
    </div>
  );
}

export default App;
