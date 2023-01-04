import { useAnimation, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../App";
import { RiLayout3Fill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { SiCraftcms } from "react-icons/si";

const Service = () => {
  const { mode } = useContext(ThemeContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animate = useAnimation();
  useEffect(() => {
    if (inView) {
      animate.start((i) => ({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
        },
      }));
    }
    if (!inView) {
      animate.start({
        opacity: 0,
        x: "-1000px",
      });
    }
  }, [inView]);
  return (
    <div
      id="service"
      ref={ref}
      className="min-h-screen py-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-10 gap-20"
    >
      <div>
        <h3 className=" text-center text-[#FF6464] text-2xl font-bold">
          Services
        </h3>
        <h1
          className={`text-center text-4xl font-bold ${
            mode === "light" ? "text-[#060918]" : "text-white"
          }`}
        >
          what I offer
        </h1>
      </div>
      <motion.div
        animate={animate}
        className=" text-md w-full grid grid-cols-1 lg:grid-cols-3 gap-10 "
      >
        <div
          className={` border-2 rounded-md p-5 flex flex-col gap-3 justify-center items-center text-gray-500 ${
            mode === "light" ? "bg-gray-200 " : " border-gray-500"
          }`}
        >
          <RiLayout3Fill className=" text-[#FF6464] text-5xl " />
          <p
            className={`text-2xl  ${
              mode === "light" ? "text-[#060918]  " : " text-white "
            }`}
          >
            Front-End layout
          </p>
          <p className="text-center">
            If you're in need of a front-end layout that is visually appealing,
            functional, and meets the needs of your users, look no further!
            Contact me today to learn more about how I can help you with your
            front-end layout needs.
          </p>
        </div>
        <div
          className={` border-2 rounded-md p-5 flex flex-col gap-3 justify-center items-center text-gray-500 ${
            mode === "light" ? "bg-gray-200 " : " border-gray-500"
          }`}
        >
          <RiComputerFill className=" text-[#FF6464] text-5xl" />
          <p
            className={`text-2xl ${
              mode === "light" ? "text-[#060918]" : "text-white"
            }`}
          >
            Back-End CMS
          </p>
          <p className="text-center">
            Backend CMS is user-friendly and intuitive, making it easy for
            anyone to use and update their website or application. It also
            includes advanced features and tools that allow users to customize
            their content and design, including templates, layouts, and styles.
          </p>
        </div>
        <div
          className={` border-2 rounded-md p-5 flex flex-col gap-3 justify-center items-center text-gray-500 ${
            mode === "light" ? "bg-gray-200 " : " border-gray-500"
          }`}
        >
          <SiCraftcms className=" text-[#FF6464] text-5xl" />
          <p
            className={`text-2xl ${
              mode === "light" ? "text-[#060918]" : "text-white"
            }`}
          >
            Responsive Design
          </p>
          <p className="text-center">
            My service is designed with responsive design in mind, ensuring that
            it is accessible and easy to use on any device. Whether you are
            accessing our service on a desktop computer, tablet, or smartphone,
            you can expect the same great user experience.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
