import React from "react";
import image from "../images/delete.jpg";

class HireCard extends React.Component {
  render() {
    return (
      <div className="hire-card">
        <img src={image} alt="" className="profile-card__image" />
        <h3 className="hire-card__name">Salil Naik</h3>
        <p className="hire-card__text">Sculptor</p>
        <p className="hire-card__text small">
          Based in Goa, India. Take bulk orders.
        </p>
        <p className="hire-card__text"></p>
        <p className="hire-card__text blue">8373*****73</p>
        {/* This button is just for display */}
        <div className="button__small">Hire</div>
      </div>
    );
  }
}

export default HireCard;
