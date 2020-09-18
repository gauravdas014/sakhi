import React from "react";

export default function Product(props) {
  const { name, cost, image } = props;
  return (
    <div className="product__wrap">
      <img src={image} className="product__image" />
      <h3 className="product__name">{name}</h3>
      <p className="product__cost">Rs. {cost}</p>
    </div>
  );
}
