import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Button = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <button
      type="submit"
      className={`h-12 border-2 border-[#FF6464] w-40 rounded-md duration-300 ease-in bg-[#FF6464] hover:bg-transparent ${
        mode === "light" ? " hover:border-[#060918]" : "hover:border-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

export const Button2 = ({ children }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <button
      type="submit"
      className={`h-9 border-2 px-3 rounded-md duration-300 ease-in mt-2 flex flex-row justify-center items-center ${
        mode === "light"
          ? " border-[#060918] text-blue hover:text-white hover:bg-[#060918]"
          : "border-white text-white hover:bg-white hover:text-[#060918]"
      }`}
    >
      {children}
    </button>
  );
};
