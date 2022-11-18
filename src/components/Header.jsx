import React from "react";
import bg from "../assets/4.jpg";

const Header = () => {
  return (
    <header className="flex 2xl:h-[70vh] h-[calc(100vh-80px)] relative top-[84px] bg-brand2 bg-cover">
      <img
        src={bg}
        className="w-full h-full object-cover opacity-[0.5]"
        alt=""
      />
      <div className="absolute w-full h-full">
        <div className="flex flex-col h-full items-center justify-center max-w-[1070px] mx-auto">
          <h1 className="font-mon text-center text-[#fff] mr-3 text-[42px] font-[500]">
            Join the new generation of change makers in Africa.
          </h1>

          <button className="bg-brand3 text-brand2 hover: font-mon font-[700] p-5">
            Start Application
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
