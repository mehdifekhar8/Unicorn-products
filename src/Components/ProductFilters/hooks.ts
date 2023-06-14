import { useState, useEffect } from "react";
import { Product } from "../ProductList/ProductList";

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleSliderChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch products");
        setIsLoading(false);
      });
  }, []);
  return {
    products,
    isLoading,
    error,
    priceRange,
    handleSliderChange,
  };
};
