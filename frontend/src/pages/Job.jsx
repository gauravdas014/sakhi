import React, { useState } from "react";
import image from "../images/kitchen_utensils.jpg";
import kit from "../images/kit.jpg";
import Product from "../components/Product.jsx";
import Input from "../components/Input";
import Axios from "axios";

export default function JobPage({ match }) {
  const [job, setJob] = useState({});
 const handleJob = () => {
  //  e.preventDefault();
  Axios.post("/api/job/" + match.params.id, {
    ...job,
  })
    .then((res) => {
      alert("Job posted successfully");
    })
    .catch((err) => {
      alert(err.message);
    });
 }
  return (
    <>
      <div className="product-page w-o-heading">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell">
              <Input
                type="text"
                label="Job Name"
                onChnage={(e) => {
                  setJob({ ...job, name: e.target.value });
                }}
              />
            </div>
            <div className="cell">
              <Input
                type="text"
                label="Description"
                onChnage={(e) => {
                  setJob({ ...job, description: e.target.value });
                }}
              />
            </div>
            <div className="cell">
              <button onClick={handleJob} className="button__small">Post Job</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
