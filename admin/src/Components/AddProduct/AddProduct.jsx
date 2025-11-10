// src/components/admin/AddProduct.jsx
import React, { useState } from 'react';
import './AddPrroduct.css';
import upload_area from '../../assets/upload_icon.jpeg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    new_price: '',
    old_price: '',
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0] || null);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    try {
      // basic validation
      if (!productDetails.name) return alert('Please enter product name');
      if (!image) return alert('Please select an image');

      let product = { ...productDetails };

      // 1) Upload image
      const formData = new FormData();
      formData.append('product', image);

      const uploadResp = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResp.ok) {
        const text = await uploadResp.text();
        console.error('Upload failed, server said:', text);
        return alert('Image upload failed');
      }

      const uploadData = await uploadResp.json();
      if (!uploadData.success) {
        console.error('Upload response:', uploadData);
        return alert('Image upload failed');
      }

      product.image = uploadData.image_url;

      // 2) Add product
      const addResp = await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!addResp.ok) {
        const text = await addResp.text();
        console.error('Add product failed, server said:', text);
        return alert('Adding product failed');
      }

      const addData = await addResp.json();
      if (addData.success) {
        alert('✅ Product Added Successfully');
        // reset form if desired
        setProductDetails({ name: '', image: '', category: 'women', new_price: '', old_price: '' });
        setImage(null);
      } else {
        console.error('Add product response:', addData);
        alert('Failed to add product');
      }
    } catch (err) {
      console.error('Add product error', err);
      alert('Something went wrong, check console');
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="type here"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Old Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="type here"
          />
        </div>

        <div className="addproduct-itemfield">
          <p>New Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="type here"
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="addproduct-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt="preview"
          />
        </label>

        <input onChange={imageHandler} type="file" name="product" id="file-input" hidden />
      </div>

      <button onClick={Add_Product} className="addproduct-button">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
