import React from "react";
import RangeSlider from "../RangeSlider/RangerSlider";
import CategoryList from "../CategoriesList/CategoriesList";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import InputWithIcon from "../Input/Input";
import SvgSearch from "../../UIAppBundle/icons/Search";
import "./ProductFilters.scss";
import { useFeaturedProducts } from "./hooks";



const ProductFilters: React.FC = () => {
  const { isLoading, error, handleSliderChange, priceRange, products } =
    useFeaturedProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-filters">
      <InputWithIcon
        icon={<SvgSearch />}
        placeholder="Search products"
        className="custom-search"
      />
      <RangeSlider priceRange={priceRange} onChange={handleSliderChange} />
      <div className="category-container">
        <CategoryList  />
      </div>
      <FeaturedProducts products={products} />
    </div>
  );
};

export default ProductFilters;
