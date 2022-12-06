import React from "react";
import { useState } from "react";

import { NavLink as Link, useLocation } from "react-router-dom";
import logo from "../../assets/beacon-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const path = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      name: "About BFA",
      link: "/",
      dropdown: true,
    },
    {
      id: 2,
      name: "Study at BFA",
      link: "/",
      dropdown: true,
    },
    {
      id: 3,
      name: "Portal",
      link: "/portal",
      dropdown: false,
    },
  ];

  const navbarVariants = {
    open: {
      y: 0
    },
    closed: {
      y: -700
    }

  }
  return (
    <nav className="w-screen fixed z-20">
      <div className="flex justify-between items-center px-5 py-3 shadow-lg w-full top-0 left-0 right-0 bottom-20 h-min font-mon font-[700] text-[14px] bg-[#ffff]">
        <Link to="/">
          <img src={logo} className="w-16" alt="" />
        </Link>
        <button className="md:hidden" onClick={openMenu}>
          <GiHamburgerMenu size={30} />
        </button>
        <ul className="hidden md:flex">
          {links.map((item) => (
            <li
              key={item.id}
              className={`mx-5 text-brand hover:text-brand2 group border-b-[2px] border-b-[transparent] transition hover:border-b-brand ${
                item.open && "border-b-brand"
              } py-1 my-1`}
            >
              <Link
                to={item.link}
                className="py-1"
                style={({ isActive }) => ({
                  borderBottom:
                    isActive && path !== "/" ? "2px solid #27476E" : "",
                })}
                end
              >
                {item.name}
              </Link>

              {item.dropdown && (
                <div className="absolute left-0 right-0 w-full z-20 border-brand3 pt-6 hidden transition group-hover:block hover:block">
                  <div className="relative left-0 top-[10px] right-0 bg-[#fff] h-[50vh] border border-brand p-10">
                    <div className="h-full flex">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}

          <Link to="/dashboard">
            <button className="bg-brand3 text-brand2 hover:bg-[transparent] hover:text-brand3 hover:border-brand3 border-[3px] border-[transparent] font-mon font-[700] h-full px-2">
              Start Application
            </button>
          </Link>
        </ul>
      </div>

        <motion.div variants={navbarVariants} animate={isOpen ? "open" : "closed"} className="absolute left-0 right-0 w-full z-20 border-brand3 pt-6 md:hidden transition">
          <div className="relative left-0 top-[10px] right-0 bg-[#fff] h-[50vh] border border-brand p-10">
            <ul className="my-10">
              {links.map((item) => (
                <Link to={item.link} key={item.id}>
                  <li className="mb-4 flex items-center">
                    {/* <img src={item.img} className="w-[20px] mr-2" /> */}
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>

    </nav>
  );
};

export default Navbar;
