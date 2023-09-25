import React from "react";
import "./css/Card.css";

function Card({ prod }) {
  return (
    <div className="card flex">
      <div className="card__img">
        <img className="img" src={prod.thumbnail} />
      </div>
      <div className="card__text flex">
        <p className="title">{prod.title.split(" ").slice(0, 2).join(" ")}</p>
        <p className="discount">Upto 12% off</p>
      </div>
    </div>
  );
}

export default Card;
