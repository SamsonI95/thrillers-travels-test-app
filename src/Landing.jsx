//App
import React from "react";
import { Link, Outlet } from "react-router-dom";

//Icons
import { BiHome } from "react-icons/bi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { TbWallet } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";


const Landing = () => {
  return (
    <>
      <div>
        <div className="-translate-x-[3rem] -translate-y-[5rem] bg-[#d6a217] w-[250px] h-[250px] rounded-full"></div>
        <div className="absolute top-0 left-[35rem] bg-[#e3f2f1] border-none w-[50rem] h-[18rem] rounded-br-full shadow"></div>
        <div className="bg-[#cadfde] w-[50rem] h-[19rem] translate-y-[2.2rem] rounded-tl-full  clip-left"></div>
      </div>

      <section className="bg-[#e3f2f1] p-5 z-20 rounded-lg shadow-lg absolute top-0 left-[3rem] ">
        <div className="bg-[#3d5654] rounded-lg w-fit">
          <div className="text-white flex flex-col items-center text-center py-8 px-4">
            <div className="bg-red-500 w-[30px] h-[30px] rounded-full"></div>
            <h3>ALEX JOHNSON</h3>
            <p>alex.johnson@gmail.com</p>
          </div>
          <div className="flex items-center justify-center bg-[#425c5a] z-10 w-full">
            <ul className="text-white cursor-pointer mt-4">
              <li className="text-xl mb-7 expand">
                <Link to="/landing/dashboard" className="flex items-center space-x-4">
                  <BiHome className="text-[#c99c33]" />
                  <p>DASHBOARD</p>
                </Link>
              </li>
              <li className="text-xl mb-7 expand">
                <Link to="/landing/flights" className="flex items-center space-x-4 ">
                  <PiAirplaneTiltThin className="text-[#c99c33]" />
                  <p>FLIGHTS</p>
                </Link>
              </li>
              <li className="text-xl mb-7 expand">
                <Link to="/landing/wallet" className="flex items-center space-x-4 ">
                  <TbWallet className="text-[#c99c33]" />
                  <p>WALLET</p>
                </Link>
              </li>
              <li className="text-xl mb-7 expand">
                <Link to="/landing/reports" className="flex items-center space-x-4 ">
                  <IoNewspaperOutline className="text-[#c99c33]" />
                  <p>REPORTS</p>
                </Link>
              </li>
              <li className="text-xl mb-7 expand">
                <Link to="/landing/statistics" className="flex items-center space-x-4 ">
                  <AiOutlinePieChart className="text-[#c99c33]" />
                  <p>STATISTICS</p>
                </Link>
              </li>
              <li className="text-xl mb-7 expand">
                <Link to="/landing/settings" className="flex items-center space-x-4 ">
                  <SlSettings className="text-[#c99c33]" />
                  <p>SETTINGS</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p>ACTIVE USERS</p>
            <div className="bg-red-500">Users</div>
            <div className="bg-blue-500">map</div>
          </div>
        </div>

        <Outlet />
      </section>
    </>
  );
};

export default Landing;
