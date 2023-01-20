import { useAnimation, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../App";
import me from "../images/me.jpg";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { BiChevronsDown } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import Button from "./Button";
import { Link } from "react-scroll";

const Home = () => {
  const { mode } = useContext(ThemeContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [text, setText] = useState("");
  const fullText = "Sint Sint Hlaing";

  useEffect(() => {
    let interval = null;
    let index = 0;
    const updateText = () => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        // index = 0;
      }
    };
    interval = setInterval(updateText, 200);
    return () => clearInterval(interval);
  }, []);

  const animate = useAnimation();
  useEffect(() => {
    if (inView) {
      animate.start((i) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        },
      }));
    }
    if (!inView) {
      animate.start((i) => ({
        opacity: 0,
        y: i * 1000,
      }));
    }
  }, [inView]);

  return (
    <div
      id="home"
      ref={ref}
      className={` max-w-6xl mx-auto py-10 md:py-20 mt-[80px] `}
    >
      <motion.div
        custom={-1}
        animate={animate}
        className="flex flex-col md:flex-row items-center justify-between gap-20 md:gap-2 px-5"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-2 items-center md:items-start">
          <h3 className=" text-gray-500 text-xl">Hello, I am</h3>
          <h1 className=" text-pink font-bold text-3xl h-7 overflow-hidden -tracking-tighter uppercase">
            {text}{" "}
          </h1>
          <h3 className="text-xl">React Js Developer</h3>
          <p className=" my-3 text-gray-500 text-md text-center md:text-left">
            I have a strong passion for building web applications.
          </p>
          <Button>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact me
            </Link>
          </Button>
          <div className=" flex flex-row gap-5 text-3xl my-3 pl-2 ">
            <a href="https://www.facebook.com/sintsint.h/">
              <BsFacebook
                className={`hover:text-[#FF6464] duration-300 ease-in `}
              />
            </a>
            <a href="https://github.com/sint-sint-hlaing">
              <BsGithub
                className={`hover:text-[#FF6464] duration-300 ease-in `}
              />
            </a>
            <a href="https://www.instagram.com/sintsint_h/">
              <BsInstagram
                className={`hover:text-[#FF6464] duration-300 ease-in `}
              />
            </a>
          </div>
        </div>
        <div className=" border-4 border-[#FF6464] h-[330px] w-[310px] rounded-full relative">
          <motion.div
            custom={-1}
            animate={animate}
            className={`w-[100px] h-[110px] rounded-full bg-[#FF6464] absolute -bottom-7 z-20 -5`}
          ></motion.div>
          <img
            src={me}
            alt=""
            className="absolute object-cover -rotate-6  h-[324px] w-[304px] rounded-full"
          />
          <div
            className={`w-[100px] h-[110px]  rounded-full absolute -top-7 duration-500 ease-in ${
              mode === "light" ? "bg-[#060918] " : "bg-white"
            } ${inView ? "right-0 " : "md:-right-60"}`}
          ></div>
        </div>
      </motion.div>
      <Link to="about" spy={true} smooth={true} duration={500} offset={-70}>
        <div className=" flex justify-center items-center pt-20 flex-col">
          <div className=" h-12 w-8 flex justify-center items-center border-4 border-[#FF6464] hover:border-opacity-60 rounded-full">
            <GoPrimitiveDot className=" animate-bounce duration-500  text-xl text-[#FF6464] hover:text-opacity-60 cursor-pointer" />
          </div>
          <BiChevronsDown className=" animate-ping text-lg text-[#FF6464]" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
