import React from "react";
import SvgArrow from "../../UIAppBundle/icons/Arrow";
import "./CategoriesList.scss";
import { useCategoriesList } from "./hooks";

export interface Category {
  id: number;
  name: string;
}



const CategoryList: React.FC = () => {
  const { loadedCategories, isLoading, error } = useCategoriesList();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="category-container">
      <div className="title">Product Categories</div>
      <div className="list-container">
        {loadedCategories.map((category) => (
          <div className="list" key={category.id}>
            <span>{category}</span>
            <SvgArrow />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
