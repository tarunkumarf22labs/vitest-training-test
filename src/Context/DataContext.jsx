import React, { createContext, useState } from "react";

export const Datacontextcreator = createContext();

function DataContext({ children }) {
  const [cart, setcart] = useState([]);
  const [first, setfirst] = useState([]);
  const [form, setform] = useState({});
  const [curretpage, setcurrentpage] = useState(1);

  const value = {
    cart,
    setcart,
    first,
    setfirst,
    form,
    curretpage,
    setcurrentpage,
    setform,
  };
  console.log(cart);
  return (
    <Datacontextcreator.Provider value={value}>
      {" "}
      {children}{" "}
    </Datacontextcreator.Provider>
  );
}

export default DataContext;
