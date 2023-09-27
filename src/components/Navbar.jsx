import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import Search from "./Search";
import { updateUserDetails } from "../features/productsSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = useSelector((state) => state.products.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(updateUserDetails(userId));
    }
    console.log(userId);
  });

  return (
    <nav className="flex navbar">
      <div className="nav__left logo sonsie-font">
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          EasyBuy
        </NavLink>
      </div>
      <div className="nav__right nav__links flex">
        <Search />
        <div className="links flex">
          <NavLink
            to={`/${user ? "Account" : "Login"}`}
            className="link btn flex"
          >
            <i className="fa-regular fa-user"></i>
            {user ? "Account" : "Login"}
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
