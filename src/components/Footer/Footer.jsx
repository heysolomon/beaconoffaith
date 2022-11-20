import logo from "../../assets/beacon-logo-dark.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./styles/styles.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const stayInTheKnow = [
    {
      id: 1,
      name: "News",
      border: true,
    },
    {
      id: 2,
      name: "Beacon Stories",
      border: true,
    },
    {
      id: 3,
      name: "Beacon Podcast",
      border: true,
    },
    {
      id: 4,
      name: "Work at Beacon",
      border: true,
    },
    {
      id: 5,
      name: "Donate to Beacon",
      border: false,
    },
  ];
  return (
    <div className="min-h-[calc(100vh-80px)] text-brand7 bg-brand relative">
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

      <div className={`${styles.grid} max-w-[90%] mx-auto mt-5`}>
        {/* About BFA */}
        <div>
          <h2 className="font-mon text-[14px] font-[600] mb-3">About BFA</h2>
          <p className="font-open text-[12px] font-[200]">
            ALU provides higher education for a higher purpose. Our students
            declare missions, not majors. <br />
            <br /> They develop the real-world skills to take on the world’s
            most pressing challenges. And they take ownership of their learning
            from day one through our peer and student-led approach – because ALU
            believes in the power and agency of young people to start shaping
            the future right now. <br />
            <br /> Together with a world-class faculty and staff, our students
            are igniting a ripple of positive impact across Africa and the
            world. Join us
          </p>
        </div>

        {/* Stay in the know */}
        <div className="md:pl-10 mt-5 md:mt-0">
          <h2 className="font-mon text-[14px] font-[600] mb-3 mt-5 md:mt-0">
            Stay in the Know
          </h2>

          <ul>
            {stayInTheKnow.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.border && "border-b-[1px] border-b-brand7"
                } pb-2 mb-2 font-open text-[12px] font-[400]`}
              >
                <Link to="">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:pl-10 mt-5 md:mt-0">
          <h2 className="font-mon text-[14px] font-[600] mb-3 mt-5 md:mt-0">
            Contact
          </h2>
          <div className="flex items-start">
            <IoLocationOutline size={30} className="mr-2" />
            <p className="font-mon text-[12px] font-[500]">
              Beacon of Faith Nursery, Primary and Secondary School Akwanga.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full absolute bottom-0 h-[5%] md:h-[10%] bg-brand7 text-brand">
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
