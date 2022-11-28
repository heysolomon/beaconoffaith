import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/4.jpg";

const Header = () => {
  return (
    <header className="flex 2xl:h-[70vh] h-screen relative top-[84px] bg-brand2 bg-cover">
      {/* <img
        src={bg}
        className="w-full h-full object-cover opacity-[0.5]"
        alt=""
      /> */}

      <iframe
        allow="fullscreen"
        frameBorder="0"
        height="100%"
        src="https://giphy.com/embed/Pf3ijvIq3yCTCo24qu/video"
        width="100%"
        allowFullScreen
      ></iframe>
      <div className="absolute w-full h-full">
        <div className="flex flex-col h-full items-center justify-center max-w-[1070px] mx-auto">
          <h1 className="font-mon text-center text-[#fff] mr-3 text-[42px] font-[500]">
            Join the new generation of change makers in <br />
            <span className="text-[70px] font-[700]">Africa</span>
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
