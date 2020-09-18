import React from "react";
import Slider from "react-slick";
import goa from "../images/goa_feni.jpg";
import kerala from "../images/kerala.jpg";
import karnataka from "../images/karnataka.jpg";
import assam from "../images/assam.jpg";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows: false,
      centerPadding: 20,
      variableWidth: true,
      pauseOnHover: false
    };
    return (
      <Slider {...settings}>
        <div className="states__item-container">
          <div className="states__item">
            <img src={goa} className="states__image" />
            <div className="states__details">
              <h3>Goa</h3>
              <p>
                Goa is known for its Cashew urrack and Feni and not only its
                beaches and food.
              </p>
              <p className="fake-link">See Goa's homemade items</p>
            </div>
          </div>
        </div>

        <div className="states__item-container">
          <div className="states__item">
            <img src={kerala} className="states__image" />
            <div className="states__details">
              <h3>Kerala</h3>
              <p>
                Women in Thrissur, Kerala weave beautiful products from screw pine leaves.
              </p>
              <p className="fake-link">See Kerala's homemade items</p>
            </div>
          </div>
        </div>

        <div className="states__item-container">
          <div className="states__item">
            <img src={karnataka} className="states__image" />
            <div className="states__details">
              <h3>Karnataka</h3>
              <p>
              Lambani embroidery is a combination of mirror work, stitching, pattern and appliqué work
              </p>
              <p className="fake-link">See Karnataka's homemade items</p>
            </div>
          </div>
        </div>

        <div className="states__item-container">
          <div className="states__item">
            <img src={assam} className="states__image" />
            <div className="states__details">
              <h3>Assam</h3>
              <p>
              The Assam valley is popular for its lush greenery, tea gardens and the beautiful handicrafts of Assam.
              </p>
              <p className="fake-link">See Assam's homemade items</p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
