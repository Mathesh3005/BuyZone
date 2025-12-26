import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item" key={id}>
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="item-image-wrap">
          <img className="item-image" src={image} alt={name} />
        </div>
      </Link>
      <p className="item-name">{name}</p>
      <div className="item-prices">
        <span className="item-price-new">₹{new_price}</span>
        <span className="item-price-old">₹{old_price}</span>
      </div>
    </div>
  );
};

export default Item;


