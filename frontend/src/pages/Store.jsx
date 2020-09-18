import React from "react";
import kit from "../images/kit.jpg";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product.jsx";
import { Link } from "react-router-dom";

export default function Store() {
  const [data, error, loading] = useFetch({
    method: "get",
    url: "/api/product",
  });


  return (
    <>
      <div className="product-page">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <h1>Store</h1>
            </div>
            {data.products && data.products.map((p) => (
              <div key={p._id} className="cell large-4 medium-6">
                <Link to={`/product-page/${p._id}`}>
                  <Product name="Bamboo Basket" cost="350" image={kit} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
