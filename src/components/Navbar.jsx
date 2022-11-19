import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/beacon-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      name: "About BFA",
      link: "",
    },
    {
      id: 2,
      name: "Study at BFA",
      link: "",
    },
    {
      id: 3,
      name: "Portal",
      link: "",
    },
    {
      id: 4,
      name: "Start Application",
      link: "",
    },
  ];
  return (
    <nav className="w-screen">
      <div className="flex justify-between items-center px-5 py-3 shadow-lg fixed z-20 w-full top-0 left-0 right-0 bottom-20 h-min font-mon font-[700] text-[14px] bg-[#ffff]">
        <Link to="/">
          <img src={logo} className="w-16" alt="" />
        </Link>
        <button className="md:hidden" onClick={openMenu}>
          <GiHamburgerMenu />
        </button>
        <ul className="hidden md:flex">
          {links.map((item) => (
            <li
              key={item.id}
              className="mx-5 text-brand hover:text-brand2 border-b-[2px] border-b-[#ffff] transition hover:border-b-brand py-1 my-1"
            >
              <Link to={item.link} className="">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <Menu
          click={openMenu}
          className="pl-4 text-brand-prussian bg-brand-gains"
        >
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
        </Menu>
      )}
    </nav>
  );
};

export default Navbar;
