import React from 'react'
import image from "../images/delete.jpg";
import kit from "../images/kit.jpg";
import Product from "../components/Product.jsx";
import Input from "../components/Input.jsx";

export const Dashboard = () => {
  return (
    <div className="product-page">
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell large-12">
          <h1 style={{marginBottom: '30px'}}>Dashboard</h1>
        </div>
        <div className="cell large-8">
          <div className="products-uploaded">
            <h3 className="products-uploaded__title">
              My products
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro consequatur recusandae. Nisi repellendus eveniet aperiam illum quia deleniti dolorum.</p>
            <div className="grid-x grid-margin-x">
              <div className="cell large-4">
                <Product name="Embroidery kit" cost="500" image={kit} extra_class="small"/>
              </div>
              <div className="cell large-4">
                <Product name="Embroidery kit" cost="500" image={kit} extra_class="small"/>
              </div>
              <div className="cell large-4">
                <Product name="Embroidery kit" cost="500" image={kit} extra_class="small"/>
              </div>
            </div>
          </div>
        </div>
        <div className="cell large-4">
          <div className="profile-card">
            <img src={image} alt="" className="profile-card__image"/>
            <h3 className="profile-card__name">Salil Naik</h3>
            <p className="profile-card__text">Sculptur</p>
            <p className="profile-card__text small">H.No 200, ipsum dolor sit amet consectetur adipisicing elit. Goa, India</p>
            <p className="profile-card__text"></p>
            <p className="profile-card__text blue">8373*****73</p>
            {/* This button is just for display */}
            <div className="button__small">Edit profile</div>
          </div>
        </div>
        <div className="cell large-6" style={{marginTop: '30px'}}>
          <div className="products-uploaded">
            <h3 className="products-uploaded__title">
              Add products
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro consequatur recusandae. Nisi repellendus eveniet aperiam illum quia deleniti dolorum.</p>

            <form>
              <div className="grid-x grid-margin-x">
                <div className="cell large-12">
                  <Input type="text" label="Product name" placeholder=""/>
                </div>
                <div className="cell large-12">
                  <Input type="text" label="Description" placeholder=""/>
                </div>
                <div className="cell large-6">
                  <Input type="text" label="Cost" placeholder=""/>
                </div>
                <div className="cell large-6">
                  <Input type="file" label="Picture" placeholder=""/>
                </div>
              </div>
              <button type="submit" className="button__small" style={{marginTop: '30px'}}>Add product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
