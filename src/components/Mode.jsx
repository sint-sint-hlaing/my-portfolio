import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { BiMoon, BiSun } from "react-icons/bi";

const Mode = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <>
      <div className="z-50 fixed right-10 bottom-10 text-pink text-3xl hover:opacity-60 backdrop-blur-md p-3 rounded-full">
        <button onClick={toggle}>
          {mode === "light" ? <BiMoon /> : <BiSun />}
        </button>
      </div>
    </>
  );
};

export default Mode;
