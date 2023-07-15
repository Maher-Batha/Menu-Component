import React from "react";

const SingleMeal = ({ title, price, img, desc }) => {
  return (
    <li className="single-meal">
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <div className="meal-title">
          <h2>{title}</h2>
          <span className="price">${price}</span>
        </div>
        <p className="info">{desc}</p>
      </div>
    </li>
  );
};

export default SingleMeal;
