import { createContext, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Mode from "./components/Mode";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import {BsFillSuitHeartFill} from 'react-icons/bs'

export const ThemeContext = createContext({
  mode: "light",
  toggle: () => {},
});

function App() {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div
        className={`w-full overflow-hidden h-auto ${
          mode === "light" ? "bg-white text-blue " : "bg-blue text-white"
        }`}
      >
        <Nav />
        <Mode />
        <Home />
        <About />
        <Service /> 
        <Project />
        <Testimonial />
        <Contact />
      </div>
      <div
        className={`w-full text-center ${
          mode === "dark" ? "bg-white text-blue " : "bg-blue text-white"
        }`}
      >Made with <BsFillSuitHeartFill className="inline-block text-2xl text-[#FF6464]"/> by Sint</div>
    </ThemeContext.Provider>
  );
}

export default App;
