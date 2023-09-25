import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex navbar">
      <div className="nav__left logo sonsie-font">EasyBuy</div>
      <div className="nav__right nav__links flex">
        <Search />
        <div className="links flex">
          <NavLink to="/login" className="link btn flex">
            <i className="fa-regular fa-user"></i>
            Login
          </NavLink>
          <NavLink to="/cart" className="link btn flex">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
