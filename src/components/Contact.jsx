import { useAnimation, motion } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast, Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { BsTelephoneForward } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import Button from "./Button";

const Contact = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_5eorgnp",
        "template_m7vrt9w",
        form.current,
        "i6kXsWGWBqXxvMFnu"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Thank you for your inquiry");
          }

          console.log(result.text);
          console.log(form.current);
        },
        (error) => {
          toast.error("Oops Something went wrong");
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <div
      id="contact"
      ref={ref}
      className="min-h-screen py-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-10 gap-10"
    >
      <div>
        <h3 className=" text-center text-[#FF6464] text-2xl font-bold">
          Contact me
        </h3>
        <h1
          className={`text-center text-4xl font-bold ${
            mode === "light" ? "text-[#060918]" : "text-white"
          }`}
        >
          Let's discuss
        </h1>
      </div>
      <motion.div
        animate={animate}
        className=" w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10"
      >
        <div
          className={`w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start`}
        >
          <div className={`flex flex-row gap-2`}>
            <BsTelephoneForward size="25" color="#ff6464" />
            +959 980 569 293
          </div>
          <div className={`flex flex-row gap-2`}>
            <FiMail size="25" color="#ff6464" />
            sints2001@gmail.com
          </div>
          <div className={`flex flex-row gap-2`}>
            <CiLocationOn size="25" color="#ff6464" />
            63 Khay Mar Street, Insein Township, Yangon
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className={`flex flex-col gap-5 w-full md:w-1/2 items-center md:items-start`}
        >
          <span className="text-red-600 top-3 relative self-start">
            {errors.name?.type === "required" && "Name is required*"}
          </span>
          <input
            className={`w-full lg:w-2/3 bg-gray-300 focus:outline-none rounded-md py-2 px-3 text-[#060918]`}
            type="text"
            placeholder="Name"
            name="name"
            {...register("name", { required: true })}
          />
          <span className="text-red-600 top-3 relative self-start">
            {errors.email?.type === "required" && "Email is required*"}
          </span>
          <input
            className={`w-full lg:w-2/3 bg-gray-300 focus:outline-none rounded-md py-2 px-3 text-[#060918]`}
            type="email"
            placeholder="Email"
            name="email"
            {...register("email", { required: true })}
          />
          <span className="text-red-600 top-3 relative self-start">
            {errors.message?.type === "required" && "Message is required*"}
          </span>
          <textarea
            className={`w-full lg:w-2/3 bg-gray-300 focus:outline-none rounded-md py-2 px-3 text-[#060918]`}
            type="text"
            placeholder="Message"
            name="message"
            {...register("message", { required: true })}
          />
          <Button>Submit</Button>

          <Toaster
            toastOptions={{
              style: {
                padding: "16px",
                color: "rgba(6, 9, 24, 1)",
              },
            }}
            position="bottom-center"
            reverseOrder={true}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
