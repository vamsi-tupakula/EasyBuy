import React, { useEffect } from "react";
import "./css/Home.css";
import { updateCategories, updateProducts } from "../features/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { NavLink } from "react-router-dom";

function Home() {
  const categories = useSelector((state) => state.products.categoriesList);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const electronics = [
    "smartphones",
    "laptops",
    "mens-watches",
    "womens-watches",
    "automotive",
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => dispatch(updateCategories(data)));
  }, []);

  useEffect(() => {
    if (!categories) return;

    const promises = [];

    for (let cat of categories) {
      const fetchPromise = fetch(
        `https://dummyjson.com/products/category/${cat}`
      )
        .then((res) => res.json())
        .then((data) => {
          return [cat, data.products];
        });
      promises.push(fetchPromise);
    }

    let products_ = {};
    Promise.all(promises).then((data) => {
      for (let d of data) {
        products_[d[0]] = d[1];
      }
      setInterval(() => {
        dispatch(updateProducts(products_));
      }, 2000);
    });
  }, [categories]);

  const getRandomCategory = () => {
    return categories[Math.floor(Math.random() * categories.length)];
  };

  if (!categories || !products)
    return (
      <div className="loading flex flex-col">
        <img
          src="https://media.tenor.com/VVrTk5ABuiYAAAAC/mr-bean-mr.gif"
          alt="waiting bean..."
        />
        <h1 align="center" className="sofia-font">
          Loading....
        </h1>
      </div>
    );

  return (
    <div className="home">
      {/* Section 1 -- Random Products */}
      <div className="random__prods flex">
        {[1, 2, 3].map((item) => {
          let prod = products[getRandomCategory()][item - 1];
          return (
            <NavLink
              to={`/products/${prod.id}`}
              className="navlink"
              key={prod.id}
            >
              <Card prod={prod} key={item} />
            </NavLink>
          );
        })}
      </div>
      {/* Section 2 -- Best of electronics */}
      <div className="heading__container flex">
        <p className="sofia-font heading">Best of Electronics</p>
        <NavLink to="/products/electronics" className="navlink">
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
      <div className="electronics flex">
        {electronics.map((item) => {
          return products[item].slice(0, 2).map((prod) => {
            return (
              <NavLink
                to={`/products/${prod.id}`}
                className="navlink"
                key={prod.id}
              >
                <Card prod={prod} key={item} />
              </NavLink>
            );
          });
        })}
      </div>
      {/* Section 3 -- Sample tiles */}
      <div className="tiles">
        {categories.slice(2, 6).map((cat, index) => {
          return (
            <div className="tile" key={index}>
              <p className="sofia-font heading">
                {cat.charAt(0).toUpperCase() + cat.substring(1)}
              </p>
              <div className="tile__products">
                {products[cat].slice(0, 4).map((prod) => {
                  return (
                    <NavLink
                      to={`/products/${prod.id}`}
                      className="navlink"
                      key={prod.id}
                    >
                      <Card prod={prod} key={prod.id} />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* Section 4 -- different categories */}
    </div>
  );
}

export default Home;
