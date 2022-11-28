import React from "react";
import success from "../../Assets/Images/success.svg";
import failed from "../../Assets/Images/error.svg";
const Validator = ({ item, ifVerified }) => {
  return (
    <div
      className="flex items-center justify-between px-[21px] py-3 mb-5 text-base border-[1px] rounded-[8px] 
    hover:shadow-input-hover bg-[#FBFBFB] border-[#001540] placeholder:text-[#ABABAB]"
    >
      <div>
        <p className="font-[500] text-[18px] text-[#2E2E2E]">{item}</p>
        <p className="font-[400] text-[14px] text-[#828282]">
          {ifVerified ? "Verified" : "Not Verified"}
        </p>
      </div>
      <span>
        <img src={ifVerified ? success : failed} className="w-[70%]" alt="" />
      </span>
    </div>
  );
};

export default Validator;
