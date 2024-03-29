//App
import React, { useState } from "react";

//Component
import DoubleRangeSlider from "./DoubleRangeSlider";

//Style
import "./StyleSheet.css";

const PriceAndMap = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="bg-[#425c5a] text-white p-3 rounded-3xl">
        <section>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <h3>FROM</h3>
              <h3 className="text-right">JFK</h3>
            </div>
            <p>NON-STOP</p>
            <div className="text-center">
              <h3 className="text-right">TO</h3>
              <h3>BOM</h3>
            </div>
          </div>
          <div className="w-[270px] mx-auto">
            <img src="/21.png" alt="map1" />
          </div>
        </section>
        <section>
          <div className="flex items-center justify-evenly space-x-5 rounded-[2rem] tag">
            <h3
              className={`${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleItemClick(0)}
            >
              NON STOP
            </h3>
            <h3
              className={`${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleItemClick(1)}
            >
              ONE STOP
            </h3>
            <h3
              className={`${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleItemClick(2)}
            >
              MORE STOP
            </h3>
          </div>
          <div>
            <h3>PRICE</h3>
            <div>
              <DoubleRangeSlider />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PriceAndMap;
