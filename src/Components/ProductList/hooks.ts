import { useState, useEffect } from "react";
import { Product } from "./ProductList";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const productsPerPage = 6;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts((prevProducts) => [...prevProducts, ...data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching products");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setVisibleProducts(products.slice(0, endIndex));
  }, [products, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    products,
    isLoading,
    error,
    visibleProducts,
    handleLoadMore,
  };
};
