import React  from "react";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import { useProducts } from "./hooks";

export interface Product {
  id: number;
  title: string;
  rating: { rate: number; count: number };
  category: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const { products, isLoading, error, visibleProducts, handleLoadMore } =
    useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list-container">
      <div className="product-list">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            stars={product.rating.rate}
            description={product.category}
            price={product.price}
            imageUrl={product.image}
          />
        ))}
      </div>
      {visibleProducts.length < products.length && (
        <Button className="load-more-button" onClick={handleLoadMore}>
          See More
        </Button>
      )}
    </div>
  );
};

export default ProductList;
