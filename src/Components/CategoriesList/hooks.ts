import { useState, useEffect } from "react";
import { Category } from "./CategoriesList";

export const useCategoriesList = () => {
  const [loadedCategories, setLoadedCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories?limit=5")
      .then((res) => res.json())
      .then((json) => {
        setLoadedCategories(json);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching categories");
        setIsLoading(false);
      });
  }, []);

  return {
    loadedCategories,
    isLoading,
    error,
  };
};
