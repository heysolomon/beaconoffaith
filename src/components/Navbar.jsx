import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/beacon-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [stillOpen, setStillOpen] = useState(false);

  const openDropdown = () => {
    setDropdown(!dropdown);
  };

  // const dropdownOpen = (bool) => {
  //   setStillOpen(bool);
  //   return;
  // };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      name: "About BFA",
      link: "",
      dropdown: true,
      open: null,
    },
    {
      id: 2,
      name: "Study at BFA",
      link: "",
      dropdown: true,
      open: null,
    },
    {
      id: 3,
      name: "Portal",
      link: "",
      dropdown: true,
      open: null,
    },
    {
      id: 4,
      name: "Start Application",
      link: "",
      dropdown: false,
    },
  ];
  return (
    <nav className="w-screen fixed z-20">
      <div className="flex justify-between items-center px-5 py-3 shadow-lg w-full top-0 left-0 right-0 bottom-20 h-min font-mon font-[700] text-[14px] bg-[#ffff]">
        <Link to="/">
          <img src={logo} className="w-16" alt="" />
        </Link>
        <button className="md:hidden" onClick={openMenu}>
          <GiHamburgerMenu size={30} />
        </button>
        <div className="hidden md:flex">
          {links.map((item) => (
            <ul className="group">
              <li
                key={item.id}
                className={`mx-5 text-brand hover:text-brand2 border-b-[2px] border-b-[#ffff] transition hover:border-b-brand ${
                  item.open && "border-b-brand"
                } py-1 my-1`}
              >
                <Link to={item.link} className="">
                  {item.name}
                </Link>
              </li>

              {item.dropdown && (
                <div className="absolute left-0 right-0 w-full z-20 border-brand3 pt-6 hidden group-hover:block hover:block">
                  <div className="relative left-0 right-0 bg-[#fff] h-[50vh] border border-brand">
                    {item.name}
                  </div>
                </div>
              )}
            </ul>
          ))}
        </div>
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
