import React from "react";
import "./RangeSlider.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import SvgFilter from "../../UIAppBundle/icons/Filter";

interface SliderProps {
  priceRange: [number, number];
  onChange: (value: [number, number]) => void;
}

const RangeSlider: React.FC<SliderProps> = ({ priceRange, onChange }) => {
  const handleSliderChange = (value: [number, number]) => {
    onChange(value);
  };

  return (
    <div className="slider">
      <div className="slider-range">
        <div className={"row"}>
        <span className="slider-price">Price</span>
     <SvgFilter/>
     </div>
        <Slider
          min={0}
          max={100}
          range
          value={priceRange}
          onChange={handleSliderChange as any}
          trackStyle={[{ backgroundColor: "#E0E0E0", height: "1px" }]}
          handleStyle={[
            {
              borderColor: "#E0E0E0",
              width: 8,
              height: 8,
              backgroundColor: "#E0E0E0",
            },
            {
              borderColor: "#E0E0E0",
              width: 8,
              height: 8,
              backgroundColor: "#E0E0E0",
            },
          ]}
          railStyle={{ backgroundColor: "#E0E0E0", height: "1px" }}
        />
                <div className={"row"}>

        <span className="slider-text">Range</span>
        <div className="slider-price-range">{priceRange.join(" - ")}</div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
