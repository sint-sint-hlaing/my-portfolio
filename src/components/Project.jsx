import { useAnimation, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { ThemeContext } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectData } from "./ProjectData";
import { Button2 } from "./Button";
import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Project = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

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
      id="project"
      ref={ref}
      className="min-h-screen py-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-10 gap-20"
    >
      <div>
        <h3 className=" text-center text-[#FF6464] text-2xl font-bold">My</h3>
        <h1
          className={`text-center text-4xl font-bold ${
            mode === "light" ? "text-[#060918]" : "text-white"
          }`}
        >
          Projects
        </h1>
      </div>
      <motion.div animate={animate} className=" w-full">
        <Slider {...settings} arrows={false}>
          {ProjectData?.map((data, index) => (
            <div className="flex justify-center items-center md:p-5 ">
              <div
                className={`border-2 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3 justify-start items-center  text-gray-500 ${
                  mode === "light" ? "bg-gray-200 " : " border-gray-500"
                }`}
              >
                <img
                  src={data.image}
                  className="w-full h-full object-top "
                  alt=""
                />
                <div className="flex flex-col gap-3 justify-center items-center py-3">
                  <h1 className=" text-2xl font-normal text-[#FF6464]">
                    {data.title}
                  </h1>
                  <p className="text-center px-2">{data.description}</p>
                  <div className="flex flex-row gap-2 ">
                    {data.language?.map((language, index) => (
                      <div
                        className={`  py-1 px-2 rounded-md ${
                          mode === "light"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-gray-900 text-gray-200"
                        }`}
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row items-center gap-2 md:gap-4">
                    <a href={data.code}>
                      <Button2>
                        <AiFillGithub className="text-2xl mr-1 sm:mr-3" />
                        Code
                      </Button2>
                    </a>
                    <a href={data.demo}>
                      <Button2>
                        <AiFillEye className="text-2xl mr-1 sm:mr-3" />
                        Demo
                      </Button2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Project;
