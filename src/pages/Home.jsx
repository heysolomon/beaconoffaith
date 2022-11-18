import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import img from "../assets/1.jpg";

const Home = () => {
  const cards = [
    {
      id: 1,
      img: img,
      text: "",
      border: true,
    },
    {
      id: 2,
      img: img,
      text: "",
      border: true,
    },
    {
      id: 3,
      img: img,
      text: "",
      border: false,
    },
  ];
  return (
    <div className="relative">
      <Navbar />
      <Header />

      <div className="h-[calc(100vh-80px)] relative bg-[#f4f4f4] grid grid-cols-1 md:flex md:items-center md:justify-center">
        {cards.map((item) => (
          <div
            className={`w-1/4 shadow transition hover:shadow-2xl h-[80%] bg-[#fffff] mx-auto md:m-0 ${
              item.border && "md:border-r-[1px] md:border-brand5"
            }`}
            key={item.id}
          >
            <div className="h-[60%] w-full px-3 pt-3 bg-gradient-to-r from-brand to-[#fff]">
              <img
                src={item.img}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="h-screen bg-[#ffff] relative flex items-center justify-center">
        <img src={img} alt="" />
      </div> */}
    </div>
  );
};

export default Home;
