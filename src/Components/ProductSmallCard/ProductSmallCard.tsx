import React from "react";
import "./ProductSmallCard.scss";

interface ProductSmallCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductSmallCard: React.FC<ProductSmallCardProps> = ({
  title,
  price,
  imageUrl,
}) => {
  return (
    <div className="product-small-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
};

export default ProductSmallCard;
