import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <header>
      <nav className="w-full flex justify-between p-4 border-b-2 border-black ">
        <div className="logo">
          <NavLink to="/"> Kirana store</NavLink>
        </div>
        <div className="links">
          <NavLink to="/cart">cart{cart.length}</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
