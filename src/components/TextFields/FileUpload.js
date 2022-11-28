import React, { useRef } from "react";
import upload from "../../Assets/Images/upload-icon.svg";

const FileUpload = (props) => {
  // File Upload
  const hiddenFileInput = useRef(null);
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <div
      className="flex items-center px-[21px] text-base border-[1px] rounded-[8px] w-full h-28 mb-10 hover:cursor-pointer
    hover:shadow-input-hover bg-[#FBFBFB] border-[#001540] placeholder:text-[#ABABAB] hover:scale-90 transition"
    >
      <input
        name={props.name}
        ref={hiddenFileInput}
        onChange={handleChange}
        type="file"
        className={`w-full h-full focus:outline-none bg-transparent placeholder hidden`}
      />
      <div
        className="h-full w-full flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <img src={upload} alt="" />
        <p>Upload Valid ID Image</p>
      </div>
    </div>
  );
};

export default FileUpload;
