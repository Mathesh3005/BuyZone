import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          Experience the perfect blend of style, comfort, and durability with our
          premium-quality product. Crafted from high-grade materials, it’s designed
          to offer lasting performance and a modern aesthetic. Whether for daily use
          or special occasions, this item adds elegance and reliability to your
          lifestyle—making it a must-have choice for those who value quality and
          trendsetting design.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
