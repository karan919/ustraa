import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import "./Css/ProductList.css";

const ProductList = (props) => {
  const [limit, setLimit] = useState(true);
  const handleClick = () => setLimit(!limit);
  let loop = limit ? 3 : props.count;

  const items = [];
  if (props.products) {
    for (let i = 0; i < loop; i++) {
      items.push(
        <div key={i} className="product">
          <div className="product-img">
            <img
              src={props.products[i].image_urls.x200}
              alt={props.products[i].name}
            />
          </div>
          <div className="product-data">
            <h3>{props.products[i].name}</h3>
            <p>
              ( {props.products[i].weight} {props.products[i].weight_unit} )
            </p>
            <p>
              <strong>₹ {props.products[i].final_price}</strong>{" "}
              <del>₹ {props.products[i].price}</del>
            </p>
            <Button variant="outlined" className="cart">
              ADD TO CART
            </Button>
          </div>
          <div className="rating">{props.products[i].rating} ★</div>
        </div>
      );
    }
  }

  let btn = limit ? (
    <Button variant="outlined" onClick={handleClick}>
      [ + ] View More
    </Button>
  ) : (
    <Button variant="outlined" onClick={handleClick}>
      [ - ] View Less
    </Button>
  );

  return (
    <div className="product-list">
      <h2>Products list</h2>
      <div className="flex-container">{items}</div>
      <div className="view-btn">{btn}</div>
    </div>
  );
};

export default ProductList;
