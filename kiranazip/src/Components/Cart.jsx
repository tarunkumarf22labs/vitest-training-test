import React from "react";
import Card from "./Card";
import CartCard from "./CartCard";
function Cart({ cart, handleCount }) {
  if (cart.length === 0) {
    return "loading";
  }
  const val = cart.map((e) => {
    return <CartCard handleCount={handleCount} key={e.id} value={e} />;
  });
  return <div>{val}</div>;
}

export default Cart;
