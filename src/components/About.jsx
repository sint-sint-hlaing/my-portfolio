import { useAnimation, motion } from "framer-motion";
import { Line } from "rc-progress";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../App";
import Button from "./Button";

const About = () => {
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
      id="about"
      ref={ref}
      className="min-h-screen py-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-10 gap-20"
    >
      <div>
        <h3 className=" text-center text-[#FF6464] text-2xl font-bold">Know</h3>
        <h1
          className={`text-center text-4xl font-bold ${
            mode === "light" ? "text-[#060918]" : "text-white"
          }`}
        >
          About Me
        </h1>
      </div>
      <motion.div
        animate={animate}
        className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20"
      >
        <div className=" flex flex-col gap-5">
          <p
            className={`text-lg ${
              mode === "light" ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Hello!
          </p>
          <p className={` text-gray-500`}>
            I have a strong foundation in programming concepts and have
            completed several projects using React as a part of my studies. I am
            excited to continue learning and growing as a developer, and I am
            confident that my passion for problem-solving and my ability to
            learn quickly will make me a valuable asset to any team."
          </p>
          <Button>Download CV</Button>
        </div>
        <div
          className={`flex flex-col gap-3 ${
            mode === "light" ? "text-gray-800" : "text-gray-300"
          }`}
        >
          <h3 className="text-center text-[#FF6464] text-xl font-bold">
            Skills
          </h3>
          <div className={` flex justify-between`}>
            <span>Web Design</span>
            <span>70%</span>
          </div>
          <Line percent={70} strokeWidth={1} strokeColor="#ff6464" />
          <div className={` flex justify-between mt-3`}>
            <span>Frontend Web Development</span>
            <span>80%</span>
          </div>
          <Line percent={80} strokeWidth={1} strokeColor="#ff6464" />
          <div className={` flex justify-between mt-3`}>
            <span>Backend Web Development</span>
            <span>50%</span>
          </div>
          <Line percent={50} strokeWidth={1} strokeColor="#ff6464" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
