import React, { useEffect, useState } from "react";
import "./css/ProductPage.css";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { firestore } from '../../app/Firebase'
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function ProductPage() {
  const { id } = useParams();
  const userId = localStorage.getItem('userId');
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

  const handleAddToCart = async (prod_id) => {
    const userDoc = await doc(firestore, "users", userId);

    await updateDoc(userDoc, {
      cart: arrayUnion(prod_id)
    }).then(() => {
      alert('successfully added to the cart');
    }).catch(() => {
      alert('unknown error occured...')
    })
  }

  return (
    <div className="product__container flex flex-col">
      <Carousel images={prod.images} />
      <h1>{prod.title}</h1>
      <p>{prod.description}</p>
      <div className="btns flex">
        <button className="btn">Buy Now</button>
        <button className="btn" onClick={() => handleAddToCart(prod.id)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductPage;
