import React, { useEffect, useState } from "react";
import "./css/ProductPage.css";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProd(data));
  }, []);

  if (!prod) {
    return (
      <div className="product__container flex">
        <h1 className="sofia-font">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="product__container flex flex-col">
      <img src={prod.thumbnail} alt="prod-img" />
      <h1>{prod.title}</h1>
      <p>{prod.description}</p>
      <div className="btns flex">
        <button className="btn">Buy Now</button>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
