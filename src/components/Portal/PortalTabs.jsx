import React from "react";
import { NavLink as Link } from "react-router-dom";

const PortalTabs = () => {
  return (
    <div className="grid grid-cols-2 h-[7%] bg-brand2 text-brand7 rounded-t-lg">
      <Link
        to=""
        className="flex items-center justify-center"
        style={({ isActive }) => ({
          background: isActive ? "transparent" : "#fff",
          color: isActive ? "#D9D9D9" : "#27476E",
          border: isActive ? "" : "2px solid #27476E",
          borderTopLeftRadius: "8px",
        })}
        end
      >
        <p className="md:text-[14px] 2xl:text-[18px] font-mon font-[500]">
          STUDENT
        </p>
      </Link>

      <Link
        to="staff"
        className="flex items-center justify-center"
        style={({ isActive }) => ({
          background: isActive ? "transparent" : "#fff",
          color: isActive ? "#D9D9D9" : "#27476E",
          border: isActive ? "" : "2px solid #27476E",
          borderTopRightRadius: "8px",
        })}
        end
      >
        <p className="md:text-[14px] 2xl:text-[18px] font-mon font-[500]">
          STAFF
        </p>
      </Link>
    </div>
  );
};

export default PortalTabs;
