//App
import React from "react";

//Icons
import { ImLocation } from "react-icons/im";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { TbArmchair2 } from "react-icons/tb";

const flights = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-max h-fit  bg-white rounded-lg p-4">
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

      <div className="flex items-center justify-between space-x-5 px-4 bg-[#e1eceb] rounded-[2rem]">
        <h3>ONE WAY</h3>
        <h3>ROUND TRIP</h3>
        <h3>MULTI CITY</h3>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4 py-4 px-7 w-fit bg-[#e1eceb] rounded-[2rem]">
          <TbArmchair2 />
          <h3>FIRST CLASS</h3>
        </div>
        <button className="py-4 px-7 w-fit bg-[#c99c33] rounded-[2rem] text-white">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default flights;
