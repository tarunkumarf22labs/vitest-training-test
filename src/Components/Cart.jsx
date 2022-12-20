import React from "react";
import Card from "./Card";
import CartCard from "./CartCard";
function Cart({ cart, handleCount }) {
  console.log(cart);
  if (cart.length === 0) {
    return "loading";
  }

  function handleSubmit(e) {}
  const val = cart.map((e) => {
    console.log(e);
    return (
      <>
        <CartCard handleCount={handleCount} key={e.id} value={e} />.{" "}
      </>
    );
  });
  return <div>{val}</div>;
}

export default Cart;
