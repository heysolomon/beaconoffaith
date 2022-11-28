import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PortalTabs from "../../components/Portal/PortalTabs";

const Portal = () => {
  const [isClicked, setIsClicked] = useState(true);

  const switchTabs = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="">
      <Navbar />
      <div className="relative top-20 h-[calc(100vh-80px)] w-screen flex items-center justify-center bg-[#f4f4f4]">
        <div className="relative w-3/6 h-[80%] bg-[#fff] rounded-lg shadow">
          <PortalTabs />
          <div className="w-full h-full rounded-b-lg p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
