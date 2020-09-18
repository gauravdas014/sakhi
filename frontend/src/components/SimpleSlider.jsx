import React from "react";
import Slider from "react-slick";
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoPlay: true,
      arrows:false,
      centerPadding: 30,
    };
    return (
      <Slider {...settings}>
        <div className="states__item-container">
          <div className="states__item">
            <h3>1</h3>
          </div>
        </div>
        <div className="states__item-container">
          <div className="states__item">
            <h3>1</h3>
          </div>
        </div>
        <div className="states__item-container">
          <div className="states__item">
            <h3>1</h3>
          </div>
        </div>
        
        
      </Slider>
    );
  }
}

export default SimpleSlider;