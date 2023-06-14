import React from "react";
import ProductSmallCard from "../ProductSmallCard/ProductSmallCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
}) => {
  return (
    <div className="product-small-card-list">
      <div className="title">Featured products</div>
      {products.map((product) => (
        <ProductSmallCard
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.image}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
