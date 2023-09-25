import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./css/SearchPage.css";
import { useSelector } from "react-redux";

function SearchPage() {
  const categories = useSelector((state) => state.products.categoriesList);
  const products = useSelector((state) => state.products.products);
  let params = useLocation();
  let query = new URLSearchParams(params.search).get("query");

  if (!categories || !products)
    return (
      <div className="flex flex-col">
        <h1 className="sofia-font" align="center">
          Fetching the data failed please go back and come again...
        </h1>
        <br />
        <NavLink to="/" className={"btn"}>
          Go to Home
        </NavLink>
      </div>
    );

  const new_products = [];
  categories.map((cat, index) => {
    products[cat].map((prod_) => {
      if (
        prod_.title.toLowerCase().includes(query) ||
        prod_.description.toLowerCase().includes(query)
      ) {
        new_products.push(prod_);
      }
    });
  });

  if (new_products.length === 0) {
    return (
      <h1 className="sofia-font" align="center">
        No products found
      </h1>
    );
  }

  return (
    <div className="search__page flex flex-col">
      {new_products.map((prod) => {
        return (
          <div className="search__card" key={prod.id}>
            <div
              className="prod__img"
              style={{ backgroundImage: `url(${prod.images[0]})` }}
            ></div>
            <div className="prod__details flex flex-col">
              <h1 className="prod__title">{prod.title.toUpperCase()}</h1>
              <p className="prod__desc">
                {prod.description.split(" ").slice(0, 7).join(" ")}...
              </p>
              <p className="prod__brand">
                <b>Brand:</b> {prod.brand}
              </p>
              <p className="prod__price">
                <b>Price:</b> {prod.price}$
              </p>
              <p className="prod__discount">
                <b>Discount:</b> {prod.discountPercentage}%
              </p>
              <NavLink to={`/products/${prod.id}`} className="btn">
                Know More
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchPage;
