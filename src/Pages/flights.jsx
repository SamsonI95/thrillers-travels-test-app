//App
import React, { useState } from "react";

//Icons
import { ImLocation } from "react-icons/im";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { TbArmchair2 } from "react-icons/tb";
import Ticket from "../Components/Ticket";

//Style

const Flights = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-max h-fit  bg-white rounded-[2rem] p-4">
        <div className="flex items-center px-4 space-x-5 bg-[#e1eceb] rounded-[2rem]">
          <h3 className="flex items-center">
            <ImLocation /> NEW YORK (JFK)
          </h3>
          <div className="rounded-full w-5 h-5 bg-[#3d5654] text-white flex items-center">
            <PiArrowsLeftRightDuotone className="relative left-[2px]" />
          </div>
          <h3 className="flex items-center">
            <ImLocation /> MUMBAI (BOM)
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 py-4 px-5 w-fit bg-[#e1eceb] rounded-[2rem]">
            <SlCalender />
            <h3>23 july 2019</h3>
          </div>
          <div className="flex items-center space-x-4 py-4 px-7 w-fit bg-[#e1eceb] rounded-[2rem]">
            <FaUser />
            <h3>2 TRAVELLERS</h3>
          </div>
        </div>

        <div className="flex items-center cursor-pointer justify-between space-x-4 px-1 bg-[#e1eceb] rounded-[2rem] tag1">
          <h3
            className={`pl-1 ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleItemClick(0)}
          >
            ONE WAY
          </h3>
          <h3
            className={`${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleItemClick(1)}
          >
            ROUND TRIP
          </h3>
          <h3
            className={`${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleItemClick(2)}
          >
            MULTI CITY
          </h3>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 py-4 px-5 w-fit bg-[#e1eceb] rounded-[2rem]">
            <TbArmchair2 />
            <h3>FIRST CLASS</h3>
          </div>
          <button className="py-4 px-7 w-[11.3rem] bg-[#c99c33] rounded-[2rem] text-white">
            SEARCH
          </button>
        </div>
      </div>

      <Ticket />
    </>
  );
};

export default Flights;
