import React, { useState } from "react";
import "./css/Search.css";

function Search() {
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    if (search) {
      console.log("searching.....");
    }
    setSearch((prev) => !prev);
  };

  return (
    <div className="search__container flex">
      {search && (
        <input
          type="text"
          className="search__input"
          placeholder="Search for products..."
        />
      )}
      <button to="/search" className="link btn" onClick={handleClick}>
        {search ? (
          <i className="fa-regular fa-circle-check"></i>
        ) : (
          <i className="fa-solid fa-magnifying-glass"></i>
        )}
      </button>
    </div>
  );
}

export default Search;
