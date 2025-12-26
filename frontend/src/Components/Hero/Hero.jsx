// src/Components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.webp";
import arrow_icon from "../Assets/arrow_icon.gif";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h5 className="eyebrow">NEW ARRIVALS ONLY</h5>

          <div className="hero-title-wrap">
            <div className="hero-top">
              <h1 className="hero-kicker">new</h1>
              <img className="hand" src={hand_icon} alt="hand" />
            </div>

            <h2 className="hero-title">
              Collections <span className="hero-subline">for everyone</span>
            </h2>
          </div>

          <div className="hero-cta">
            <button className="cta-btn">
              <span>Latest Collection</span>
              <svg className="cta-arrow" viewBox="0 0 24 24" aria-hidden>
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="small-note">Free delivery over ₹999</div>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          <div className="hero-figure">
            <img src={hero_image} alt="hero" />
            <div className="figure-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
