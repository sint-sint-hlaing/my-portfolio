import { useAnimation, motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { ThemeContext } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
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
      id="review"
      ref={ref}
      className="min-h-screen py-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-10 gap-10"
    >
      <div>
        <h3 className=" text-center text-[#FF6464] text-2xl font-bold">
          What My
        </h3>
        <h1
          className={`text-center text-4xl font-bold ${
            mode === "light" ? "text-[#060918]" : "text-white"
          }`}
        >
          Client Say
        </h1>
      </div>
      <motion.div animate={animate} className=" w-full">
        <Slider {...settings} arrows={false}>
          {[1, 2, 3].map((data) => (
            <div className=" flex flex-col justify-center items-center w-full">
              <img
                src="https://img.freepik.com/free-photo/young-asian-chinese-man-with-hand-chin-thinking-about-question-pensive-expression-standing-isolated-yellow-wall-smiling-with-thoughtful-face-doubt-concept_231208-1595.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
                alt=""
                className="w-28 h-28 rounded-full mx-auto"
              />
              <div className="">
                <p className={`text-center py-5 text-gray-500 `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur et diam nec ipsum condimentum tempus et in dui.
                  Fusce id luctus urna. Suspendisse in elit vitae nisl faucibus
                  malesuada. Ut sit amet tempus lacus, at malesuada nisl. Nulla
                  facilisi. Ut eu semper nisi, a pulvinar diam.
                </p>
                <div className="text-end py-3">
                  <h1 className=" text-2xl font-bold text-[#FF6464]">
                    John Smith
                  </h1>
                  <h3
                    className={`text-lg font-normal ${
                      mode === "light" ? " text-gray-700" : " text-gray-200"
                    }`}
                  >
                    Project Manager
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
