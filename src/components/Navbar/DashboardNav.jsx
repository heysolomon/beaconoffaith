import React from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

import logo from "../../assets/beacon-logo-dark.svg";

const DashboardNav = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "",
    },
    {
      id: 2,
      name: "Check Results",
      link: "check-results",
    },
    {
      id: 3,
      name: "Pay School Fees",
      link: "pay-school-fees",
    },
  ];

  return (
    <nav className="fixed z-10 bg-brand text-brand7 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0">
              <img src={logo} alt="beaon-logo" className="w-16" />
            </div>

            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    style={({ isActive }) => ({
                      background: isActive ? "#27476E" : "",
                      color: isActive ? "#fff" : "#fff",
                      height: isActive && "max-content",
                      border: isActive && "1px solid #2B3C60",
                      borderRadius: isActive && "8px",
                    })}
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    end
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden md:flex md:items-center">
            {/* Notifications */}
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="relative ml-3">
              <button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={logo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
