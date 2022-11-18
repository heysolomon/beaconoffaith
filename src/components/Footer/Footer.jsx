import logo from "../../assets/beacon-logo-dark.svg";

const Footer = () => {
  return (
    <div className="h-min md:h-[calc(100vh-80px)] text-brand7 bg-brand relative">
      <div className="max-w-[1070px] mx-auto">
        {/* logo and social media handles */}
        <div className="flex justify-between pt-10">
          <div className="flex items-center">
            <img src={logo} className="w-[20%] mr-2" alt="" />
            <h2 className="font-mon font-[600]">
              BEACON <br /> OF FAITH ACADEMY <br />
              AKWANGA
            </h2>
          </div>

          <div></div>
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
