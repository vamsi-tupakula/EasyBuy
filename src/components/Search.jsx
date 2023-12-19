import React, { useState } from "react";
import "./css/Search.css";
import { NavLink, useNavigate } from "react-router-dom";

function Search() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const hanldeNavigate = () => {
    if (value === "") {
      return;
    }
    navigate(`/search/?query=${value}`);
    setValue('');
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      hanldeNavigate();
    }
  }

  return (
    <div className="search__container flex">
      <input
        type="text"
        className="search__input"
        placeholder="Search for products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEnter}
      />
      <NavLink className="link btn" onClick={hanldeNavigate}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </NavLink>
    </div >
  );
}

export default Search;
