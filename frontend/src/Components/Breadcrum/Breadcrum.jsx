import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum.jpeg';

const Breadcrum = ({ product }) => {
  if (!product) return null; // 👈 Prevents crash before product loads

  return (
    <div className="breadcrum">
      <span>SHOP</span>
      <img src={arrow_icon} alt=">" />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;

