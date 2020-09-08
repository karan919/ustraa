import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Css/CategoryTabs.css";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const CategoryTabs = (props) => {
  const changeCategoryHandler = (id) => {
    props.setCurrentCategory(id);
  };

  return (
    <div>
      <h2 className="heading">Our Products</h2>
      <Slider {...settings}>
        {props.category.map((category) => {
          return (
            <div
              className="tab"
              key={category.category_id}
              onClick={(e) => changeCategoryHandler(category.category_id)}
            >
              <img src={category.category_image} alt={category.category_name}/>
              <h3 className="tab-title">{category.category_name}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategoryTabs;
