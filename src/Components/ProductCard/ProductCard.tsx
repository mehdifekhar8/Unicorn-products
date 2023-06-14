import React from "react";
import "./ProductCard.scss";
import SvgStar from "../../UIAppBundle/icons/Star";
import SvgWishlist from "../../UIAppBundle/icons/WishList";

interface ProductCardProps {
  title: string;
  stars: number;
  description: string;
  price: number;
  imageUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  stars,
  description,
  price,
  imageUrl,
}) => {
  const renderStars = () => {
    const roundedStars = Math.round(stars);
    const starIcons = [];

    for (let i = 0; i < roundedStars; i++) {
      starIcons.push(<SvgStar key={i} />);
    }

    return starIcons;
  };

  return (
    <div className="product-card">
      <div className="product-icon">
        <SvgWishlist />
      </div>
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="product-image" />
      ) : (
        <div className="product-placeholder"></div>
      )}
      <div className="product-content">
        <h2 className="product-card-title">{title}</h2>
        <div className="product-stars">{renderStars()}</div>
        <p className="product-description">{description}</p>
        <div className="product-card-price">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
