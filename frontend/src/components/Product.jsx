import React from "react";

export default function Product(props) {
  const { name, cost, image, extra_class } = props;
  return (
    <a href="/product-page">
      <div className={`product__wrap ${extra_class=='small'? 'small': ''}`}>
        <img src={image} className={`product__image ${extra_class=='small'? 'small': ''}`} />
        <h3 className={`product__name ${extra_class=='small'? 'small': ''}`}>{name}</h3>
        <p className={`product__cost ${extra_class=='small'? 'small': ''}`}>Rs. {cost}</p>
      </div>
    </a>
  );
}
