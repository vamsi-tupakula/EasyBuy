import React, { useState } from "react";
import "./css/Search.css";
import { NavLink } from "react-router-dom";

function Search() {
  const [value, setValue] = useState("");
  const handleClick = () => {};

  return (
    <div className="search__container flex">
      <input
        type="text"
        className="search__input"
        placeholder="Search for products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <NavLink
        to={`/search/?query=${value}`}
        className="link btn"
        onClick={handleClick}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </NavLink>
    </div>
  );
}

export default Search;
