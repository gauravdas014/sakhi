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
          <h1 style={{marginBottom: '30px'}}>डैशबोर्ड {/*Dashboard*/}</h1>
        </div>
        <div className="cell large-8">
          <div className="products-uploaded">
            <h3 className="products-uploaded__title">
              मेरे उत्पाद
            </h3>
            <p>सभी अपलोड किए गए उत्पादों को यहां सूचीबद्ध किया जाएगा। आप उस पर क्लिक करके अपने उत्पादों का प्रबंधन कर सकते हैं।</p>
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
            <h3 className="profile-card__name">सपना नाइक</h3>
            <p className="profile-card__text">संगतराश</p>
            <p className="profile-card__text small">घर 200, ipsum dolor sit amet consectetur adipisicing elit. Goa, India</p>
            <p className="profile-card__text"></p>
            <p className="profile-card__text blue">8373*****73</p>
            {/* This button is just for display */}
            <div className="button__small">Edit profile</div>
          </div>
        </div>
        <div className="cell large-6" style={{marginTop: '30px'}}>
          <div className="products-uploaded">
            <h3 className="products-uploaded__title">
              उत्पाद अपलोड करें
            </h3>
            <p>अधिक उत्पाद अपलोड करने के लिए, कृपया नीचे दिया गया फ़ॉर्म भरें।</p>

            <form>
              <div className="grid-x grid-margin-x">
                {/* Name */}
                <div className="cell large-12">
                  <Input type="text" label="उत्पाद का नाम" placeholder=""/>
                </div>

                {/* Description */}
                <div className="cell large-12">
                  <Input type="text" label="विवरण" placeholder=""/>
                </div>

                {/* Cost */}
                <div className="cell large-6">
                  <Input type="text" label="क़ीमत" placeholder=""/>
                </div>

                {/* File upload */}
                <div className="cell large-6">
                  <Input type="file" label="फ़ोटो" placeholder=""/>
                </div>
              </div>
              <button type="submit" className="button__small" style={{marginTop: '30px'}}>अपलोड करें</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
