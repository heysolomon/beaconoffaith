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
      <div className="relative top-20 h-[calc(100vh-80px)] w-screen flex justify-center pt-20 bg-[#f4f4f4]">
        <div className="relative w-[80%] md:w-3/6 h-[60%] md:h-[80%] 2xl:h-[70%] bg-[#fff] rounded-lg shadow">
          <PortalTabs />
          <div className="w-full h-full rounded-b-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
