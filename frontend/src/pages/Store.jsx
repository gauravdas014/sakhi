import React from "react";
import kit from "../images/kit.jpg";
import Product from "../components/Product.jsx";

export default function Store() {
  return (
    <>
      <div className="product-page">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <h1>Store</h1>
            </div>
            <div className="cell large-4 medium-6">
              <Product name="Embroidery kit" cost="500" image={kit} />
            </div>
            <div className="cell large-4 medium-6">
              <Product name="Khadi" cost="1500" image={kit} />
            </div>
            <div className="cell large-4 medium-6">
              <Product name="Bamboo Basket" cost="350" image={kit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
