import logo from "../../assets/beacon-logo-dark.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[calc(100vh-80px)] text-brand7 bg-brand relative">
      <div className="max-w-[90%] mx-auto">
        {/* logo and social media handles */}
        <div className="flex flex-col md:flex-row md:justify-between py-5">
          <div className="flex items-center">
            <img src={logo} className="w-[18%] mr-2" alt="" />
            <h2 className="font-mon font-[600]">
              BEACON <br /> OF FAITH ACADEMY <br />
              AKWANGA
            </h2>
          </div>

          <div className="flex mt-10 items-center md:justify-between">
            <a href="">
              <FaFacebook size={25} className="md:mx-3 mx-2" />
            </a>
            <a href="">
              <FaInstagram size={25} className="md:mx-3 mx-2" />
            </a>
            <a href="">
              <FaTwitter size={25} className="md:mx-3 mx-2" />
            </a>
            <a href="">
              <FaLinkedin size={25} className="md:mx-3 mx-2" />
            </a>
          </div>
          {/* <div className="md:hidden flex items-center justify-between">
            <a href="">
              <FaFacebook size={15} className="mx-1" />
            </a>
            <a href="">
              <FaInstagram size={15} className="mx-1" />
            </a>
            <a href="">
              <FaTwitter size={15} className="mx-1" />
            </a>
            <a href="">
              <FaLinkedin size={15} className="mx-1" />
            </a>
          </div> */}
        </div>
        <div className="w-full h-[0.5px] rounded bg-brand7 mt-2 mb-4 md:mb-0"></div>
      </div>
      <div className="w-full absolute bottom-0 h-[10%] bg-brand7 text-brand">
        <div className="h-full flex items-center px-5">
          <p className="text-[12px] font-mon font-[500]">
            © 2022 BFA. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
