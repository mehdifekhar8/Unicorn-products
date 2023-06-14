import React from "react";
import "./Banner.scss";

interface BannerProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="banner">
      <img className="banner-image" src={imageUrl} alt="Banner" />
      <div className="banner-overlay">
        <div className="text-container">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-description">{description}</p>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;
