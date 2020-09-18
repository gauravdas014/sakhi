import React, { useContext, useState } from "react";
import image from "../images/kitchen_utensils.jpg";
import kit from "../images/kit.jpg";
import Product from "../components/Product.jsx";
import Input from "../components/Input";
import Axios from "axios";
import useFetch from "../hooks/useFetch";
import { GlobalContext } from "../Context/Global";

export default function MyJobs({ match }) {
  const {user} = useContext(GlobalContext);
  const [jobs, err, loading] = useFetch({
    method: 'get',
    url: '/api/job/' + user._id
  });
  console.log(jobs);

  return (
    <>
      <div className="product-page w-o-heading">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell">
              {jobs.jobs && jobs.jobs.map(j => {
                return (
                  <>
                  <h1>{j.user}</h1>
                </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
