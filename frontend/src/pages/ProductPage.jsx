import React from "react";
import image from "../images/kitchen_utensils.jpg";
import kit from "../images/kit.jpg";
import Product from "../components/Product.jsx";

export default function ProductPage() {
  return (
    <>
      <div className="product-page w-o-heading">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-5">
              <img src={image} alt="" className="product-page__image" />
            </div>

            <div className="cell large-7">
              <h1 className="product-page__name">
                Homemage kitchen utensils and spoons
              </h1>
              <p>By <span className="product-page__company-name">SN small scale industry</span></p>
              <p className="product-page__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vitae cum eius dolor esse, alias neque doloremque? Asperiores
                esse placeat harum ducimus quaerat quae distinctio. Quis
                adipisci numquam error cum.
              </p>
              <button className="button__small">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-page">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <h2 style={{marginTop:'30px'}}>More products</h2>
            </div>
            <div className="cell large-4 medium-6">
              <Product name="Embroidery kit" cost="500" image={kit} />
            </div>
            <div className="cell large-4 medium-6">
              <Product name="Khadi" cost="1500" image={kit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
