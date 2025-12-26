import React, { useContext } from 'react'; // ✅ import useContext here
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.jpeg';
import star_dull_icon from '../Assets/star_dull_icon.jpeg'
import { ShopContext } from '../../Context/ShopContext'; // ✅ import your context correctly

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext); // ✅ now works fine

  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={product.image} alt={product.name} />
          ))}
        </div>

        <div className="productdisplay-img">
          <img
            src={product.image}
            alt={product.name}
            className="productdisplay-main-img"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_dull_icon} alt="star" />
          ))}
          <img src={star_icon} alt="empty-star" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          This stylish product combines comfort, durability, and modern design.
          Perfect for everyday use, it’s made from premium materials, offers
          exceptional quality, and enhances your lifestyle with a sleek, trendy
          look.
        </div>

        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-shirt, Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

