import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown.jpeg";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  // 🧠 Handle case when data isn't loaded yet
  if (!all_product || all_product.length === 0) {
    return (
      <div className="shop-category">
        <img className="shopcategory-banner" src={banner} alt="category banner" />
        <h2 style={{ textAlign: "center", margin: "30px 0" }}>Loading products...</h2>
      </div>
    );
  }

  // 🧹 Filter products by category
  const filteredProducts = all_product.filter(
    (item) => item.category && item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="shop-category">
      {/* Banner */}
      <img className="shopcategory-banner" src={banner} alt={`${category} banner`} />

      {/* Header Section */}
      <div className="shopcategory-indexSort">
        <p>
          Showing <b>{filteredProducts.length}</b> products in{" "}
          <b>{category.charAt(0).toUpperCase() + category.slice(1)}</b>
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>

      {/* Explore More Button */}
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

