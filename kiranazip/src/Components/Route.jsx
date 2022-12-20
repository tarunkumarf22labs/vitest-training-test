import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import ProductDetails from "./ProductDetails ";

export default function RouteBODY({
  first,
  addcart,
  cart,
  handleCount,
  curretpage,
  handleclick,
  totalpage,
}) {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Home
          data={first}
          curretpage={curretpage}
          handleclick={handleclick}
          totalpage={totalpage}
        />
      ),
    },
    {
      path: "store/:id",
      element: <ProductDetails addCart={(val) => addcart(val)} />,
    },
    {
      path: "cart",
      element: <Cart cart={cart} handleCount={(e, id) => handleCount(e, id)} />,
    },
    // ...
  ]);

  return routes;
}
