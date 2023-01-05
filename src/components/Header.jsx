import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/vid.mp4";

const Header = () => {
  return (
    <header className="flex 2xl:h-[70vh] h-screen relative top-[84px] bg-brand2 bg-cover">
    <div className="w-full h-full absolute top-0 left-0 right-0 bg-brand2 opacity-[0.5]">

    </div>
      <video width="100%" height="100%" autoPlay loop muted preload="true" playsInline className="object-cover">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full">
        <div className="flex flex-col h-full items-center justify-center max-w-[1070px] mx-auto">
          <h1 className="font-mon text-center text-[#fff] mr-3 text-[42px] font-[500]">
          <span className="text-[40px] md:text-[70px] font-[700]">Beacon of Faith Academy</span> <br />
         A Place to Learn, Grow, and Thrive<br />
          </h1>

          <Link to="">
            <button className="bg-brand3 text-brand2 hover:bg-[transparent] hover:text-brand3 hover:border-brand3 border-[3px] border-[transparent] font-mon font-[700] p-5">
              Start Application
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
