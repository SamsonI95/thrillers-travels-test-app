import React from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { TbWallet } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";

const SideNav = () => {
  return (
    <>
      <div className="bg-[#3d5654] p-4 rounded-lg">
        <div className="text-white text-center">
          <h3>ALEX JOHNSON</h3>
          <p>alex.johnson@gmail.com</p>
        </div>
        <div>
          <ul>
            <li>
              <BiHome />
              <Link>DASHBOARD</Link>
            </li>
            <li>
              <PiAirplaneTiltThin />
              <Link>FLIGHTS</Link>
            </li>
            <li>
              <TbWallet />
              <Link>WALLET</Link>
            </li>
            <li>
              <IoNewspaperOutline />
              <Link>REPORTS</Link>
            </li>
            <li>
              <AiOutlinePieChart />
              <Link>STATISTICS</Link>
            </li>
            <li>
              <SlSettings />
              <Link>SETTINGS</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>ACTIVE USERS</p>
          <div className="bg-red-500">Users</div>
          <div className="bg-blue-500">map</div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
