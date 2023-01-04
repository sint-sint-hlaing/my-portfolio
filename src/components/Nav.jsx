import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../App";
import { Link } from "react-scroll";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={` z-50 bg-inherit w-full fixed top-0 cursor-pointer lg:px-24 border-b-2  border-opacity-10 ${
        mode === "light" ? "border-[#060918]" : "border-white"
      }`}
    >
      <div className=" md:flex items-center justify-between py-4 md:px-20 px-7">
        <div className=" text-2xl -tracking-tighter font-bold text-pink font-[Sevillana]">
          <Link to="home" spy={true} smooth={true} duration={500} offset={-70}>
            <span className=" text-5xl">S</span>
            <span
              className={` ${mode === "light" ? "text-blue" : "text-white"}`}
            >
              i
            </span>
            nt
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-5 cursor-pointer md:hidden hover:text-[#FF6464] "
        >
          {open ? <AiOutlineClose /> : <FaBars />}
        </div>
        <ul
          className={`${
            mode === "light" ? "bg-white" : "bg-[#060918]"
          }  md:bg-transparent md:flex md:gap-7 md:items-center md:pb-0 absolute md:static z-10 left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in shadow-md md:shadow-none ${
            open ? "top-14 " : "top-[-500px]"
          }`}
        >
          <li className="hover:text-[#FF6464] md:my-0 text-xl my-7 px-9 md:px-0 mt-14 duration-200 ease-in ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </Link>
          </li>
          <li className="hover:text-[#FF6464] md:my-0 text-xl my-7 px-9 md:px-0  duration-200 ease-in ">
            <Link
              to="service"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Service
            </Link>
          </li>
          <li className="hover:text-[#FF6464] md:my-0 text-xl my-7 px-9 md:px-0  duration-200 ease-in ">
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Project
            </Link>
          </li>
          <li className="hover:text-[#FF6464] md:my-0 text-xl my-7 px-9 md:px-0  duration-200 ease-in ">
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Review
            </Link>
          </li>
          <li className="hover:text-[#FF6464] md:my-0 text-xl my-7 px-9 md:px-0  duration-200 ease-in ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
