import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import img from "../../assets/1.jpg";
import grid from "../../assets/5.jpg";
import circles from "../../assets/circles.svg";
import { Link } from "react-router-dom";
import styles from "./styles/style.module.css";
import Footer from "../../components/Footer/Footer";
import Top from "../../components/Top";

const Home = () => {
  const cards = [
    {
      id: 1,
      img: img,
      text: "Be equipped with future-proof education that helps you succeed today and remain relevant tomorrow. Learn important 21st-century skills that will help you succeed. ",
      head: "BE A LEARNER",
      border: true,
    },
    {
      id: 2,
      img: img,
      text: "Your education at ALU will equip you with the skills, tools and resources to build sustainable solutions to some of Africa’s biggest challenges",
      head: "BE A BUILDER",
      border: true,
    },
    {
      id: 3,
      img: img,
      text: "Every student at ALU graduates with a strong foundation in leadership that sets them up to succeed in whatever comes next.",
      head: "BE A LEADER",
      border: false,
    },
  ];
  return (
    <div className={`relative ${styles.scroll}`}>
      <Navbar />
      <Top />
      <Header />

      {/* left and rignt content */}
      <div className="bg-[#ffff] py-10 md:py-0 md:h-[calc(100vh-80px)] relative flex flex-col justify-center">
        <img
          src={circles}
          className="absolute hidden md:block left-20 bottom-10"
          alt=""
        />

        <div className="max-w-[80%] md:max-w-[83%] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 md:h-full">
          <div className="flex items-center m-0">
            <img src={grid} className="relative" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-brand font-[700] text-[40px] mb-5">
              Lorem ipsum, dolor sit amet{" "}
            </h2>
            <p className="font-open text-[16px] text-brand2 font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              totam, maiores tenetur vitae necessitatibus nisi quam saepe
              itaque, earum deserunt sunt, provident ab mollitia numquam magnam
              iusto corporis perspiciatis modi.
            </p>
            <Link to="">
              <button className="bg-brand5 text-[#fff] hover:bg-[transparent] hover:text-brand5 hover:border-brand5 border-[3px] border-[transparent] font-mon font-[700] p-3 mt-4">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="bg-[#f4f4f4] py-10 md:py-0">
        <div className="w-[80%] md:w-3/4 mx-auto md:pt-10">
          <h2 className="text-brand font-[700] text-[20px] md:text-[30px] font-serif">
            Welcome to BFA
          </h2>
          <div className="w-full h-[1px] rounded bg-brand mt-2 mb-4 md:mb-0"></div>
        </div>
        <div className="h-min md:h-[calc(100vh-80px)] md:relative grid grid-cols-1 gap-[20px] md:gap-0 md:flex md:items-center md:justify-center">
          {cards.map((item) => (
            <div
              className={`w-[80%] md:w-1/4 shadow transition hover:shadow-2xl h-max md:h-[80%] bg-[#ffff] mx-auto md:m-0 relative ${
                item.border && "md:border-r-[1px] md:border-brand5"
              }`}
              key={item.id}
            >
              <div className="bg-grad h-[60%] w-full px-3 pt-3">
                <img
                  src={item.img}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div className="p-3 w-full">
                <h2 className="text-brand font-[700] text-[20px] font-mon">
                  {item.head}
                </h2>
                <div className="bg-brand3 h-[3px] rounded w-[25%] mt-2 mb-3"></div>
                <p className="font-open text-[12px] text-brand2 font-[500]">
                  {item.text}
                </p>
                <Link to="">
                  <button className="bg-brand3 md:absolute mt-5 md:mt-0 md:bottom-[12px] text-[#fff] hover:bg-[transparent] hover:text-brand3 hover:border-brand3 border-[3px] border-[transparent] font-mon font-[700] p-3 text-[10px]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
