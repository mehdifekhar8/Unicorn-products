import React, { useState } from "react";
import RangeSlider from "../RangeSlider/RangerSlider";
import CategoryList from "../CategoriesList/CategoriesList";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import InputWithIcon from "../Input/Input";
import SvgSearch from "../../UIAppBundle/icons/Search";
import "./ProductFilters.scss";
import { useFeaturedProducts } from "./hooks";
import { useMediaQuery } from "react-responsive";
import SvgFilter from "../../UIAppBundle/icons/Filter";
import Button from "../Button/Button";
import SvgClose from "../../UIAppBundle/icons/Close";

const ProductFilters: React.FC = () => {
  const { isLoading, error, handleSliderChange, priceRange, products } =
    useFeaturedProducts();
  const isFromMobileSmall = useMediaQuery({ maxWidth: 576 });
  const [showSidebar, setShowSidebar] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowSidebar(false);
    }
  };

  if (isFromMobileSmall) {
    return (
      <>
        <Button className="modal-toggle-button" onClick={handleSidebarToggle}>
          <SvgFilter />
        </Button>
        {showSidebar && (
          <div className="sidebar-overlay" onClick={handleOverlayClick}>
            <div className="sidebar open">
              <Button
                className="sidebar-close-button"
                onClick={handleSidebarToggle}
              >
                <SvgClose/>
              </Button>
              <div className="sidebar-content">
                <InputWithIcon
                  icon={<SvgSearch />}
                  placeholder="Search products"
                  className="custom-search"
                />
                <RangeSlider
                  priceRange={priceRange}
                  onChange={handleSliderChange}
                />
                <div className="category-container">
                  <CategoryList />
                </div>
                <FeaturedProducts products={products} />
              </div>
            </div>
          </div>
        )}
      </>
    );
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
        <CategoryList />
      </div>
      <FeaturedProducts products={products} />
    </div>
  );
};

export default ProductFilters;
