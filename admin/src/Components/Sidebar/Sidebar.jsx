import React from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';
import add_product_icon from '../../assets/add_product_icon.jpeg';
import product_list_icon from '../../assets/product_list.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>

        <div className="sidebar-item">
            <img src={add_product_icon} alt=""></img>
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>

        <div className="sidebar-item">
            <img src={product_list_icon} alt=""></img>
            <p>Product List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar