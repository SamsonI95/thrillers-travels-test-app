import { useState } from "react";
import "./App.css";

//Icons
import { BiHome } from "react-icons/bi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { TbWallet } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { ImLocation } from "react-icons/im";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { TbArmchair2 } from "react-icons/tb";

function App() {
  return (
    <>
      <div>
        <div className="-translate-x-[3rem] -translate-y-[5rem] bg-[#d6a217] w-[250px] h-[250px] rounded-full"></div>
        <div className="absolute top-0 left-[35rem] bg-[#e3f2f1] border-none w-[50rem] h-[18rem] rounded-br-full shadow"></div>
        <div className="bg-[#cadfde] w-[50rem] h-[19rem] translate-y-[2.2rem] rounded-tl-full  clip-left"></div>

        <section className="bg-[#e3f2f1] p-5 z-20 rounded-lg shadow-lg absolute top-0 left-[3rem] grid grid-cols-2">
          <div className="bg-[#3d5654] p-4 rounded-lg w-fit">
            <div className="text-white flex flex-col items-center text-center">
              <div className="bg-red-500 w-[30px] h-[30px] rounded-full"></div>
              <h3>ALEX JOHNSON</h3>
              <p>alex.johnson@gmail.com</p>
            </div>
            <div className="">
              <ul className="text-white">
                <li className="flex items-center">
                  <BiHome className="text-[#c99c33]" />
                  <p>DASHBOARD</p>
                </li>
                <li className="flex items-center">
                  <PiAirplaneTiltThin className="text-[#c99c33]" />
                  <p>FLIGHTS</p>
                </li>
                <li className="flex items-center">
                  <TbWallet className="text-[#c99c33]" />
                  <p>WALLET</p>
                </li>
                <li className="flex items-center">
                  <IoNewspaperOutline className="text-[#c99c33]" />
                  <p>REPORTS</p>
                </li>
                <li className="flex items-center">
                  <AiOutlinePieChart className="text-[#c99c33]" />
                  <p>STATISTICS</p>
                </li>
                <li className="flex items-center">
                  <SlSettings className="text-[#c99c33]" />
                  <p>SETTINGS</p>
                </li>
              </ul>
            </div>
            <div>
              <p>ACTIVE USERS</p>
              <div className="bg-red-500">Users</div>
              <div className="bg-blue-500">map</div>
            </div>
          </div>

          <div className="grid grid-cols-2 w-max h-fit -translate-x-[20rem] bg-white rounded-lg p-4">
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
                <h3>2 TRAVELLER</h3>
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
              <button className="py-4 px-7 w-fit bg-[#c99c33] rounded-[2rem] text-white">SEARCH</button>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="-translate-x-[3rem] -translate-y-[5rem] bg-[#d6a217] w-[250px] h-[250px] rounded-full"></div>
      <div className="absolute top-0 left-[34.2rem]  w-[50rem] h-[25rem] rounded-br-full shadow"></div>
      <div className="bg-[#cadfde] w-[50rem] h-[25rem] rounded-tl-full  clip-left"></div> */}
    </>
  );
}

export default App;
