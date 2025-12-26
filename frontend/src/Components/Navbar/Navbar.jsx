import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.jpeg";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef(null);
  const ctx = useContext(ShopContext);

  if (!ctx) return <div className="navbar">Loading...</div>;
  const { getTotalCartItems } = ctx;

  // Toggle for mobile dropdown
  const dropdown_toggle = (e) => {
    if (!menuRef.current) return;
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>BUYZONE</p>
      </div>

      {/* MOBILE DROPDOWN */}
      <img
        className="nav-dropdown"
        src={nav_dropdown}
        alt="menu"
        onClick={dropdown_toggle}
      />

      {/* NAV MENU */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>

        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Mens</Link>
          {menu === "mens" && <hr />}
        </li>

        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Womens</Link>
          {menu === "womens" && <hr />}
        </li>

        {/* ✅ Changed from "kids" → "kid" */}
        <li onClick={() => setMenu("kid")}>
          <Link to="/kid">Kid</Link>
          {menu === "kid" && <hr />}
        </li>
      </ul>

      {/* LOGIN + CART */}
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="cart-icon" />
          <span className="nav-cart-count">{getTotalCartItems()}</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
