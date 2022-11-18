import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import img from "../assets/1.jpg";

const Home = () => {
  const cards = [
    {
      id: 1,
      img: "",
      text: "",
    },
    {
      id: 2,
      img: "",
      text: "",
    },
    {
      id: 3,
      img: "",
      text: "",
    },
  ];
  return (
    <div className="relative">
      <Navbar />
      <Header />

      <div className="h-screen relative top-20 bg-[#ffff] flex items-center justify-center">
        {cards.map((item) => (
          <div className="w-1/5 shadow-md transition hover:shadow-xl h-[70%]" key={item.id}>

          </div>
        ))}
      </div>
      <div className="h-screen bg-[#ffff] relative flex items-center justify-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
