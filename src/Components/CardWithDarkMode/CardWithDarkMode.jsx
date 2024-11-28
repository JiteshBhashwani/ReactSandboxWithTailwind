import React, { useState } from "react";
import pfp from "../../assets/pfp.png";
import { Sun, Moon, Github, Linkedin, Codepen } from "lucide-react";
function CardWithDarkMode() {
  const [darkMode, setDarkMode] = useState(true);
  const handleModeToggle = () => {
    setDarkMode((prev) => !prev);
  };
  const darkCss = "text-white bg-stone-950";
  const liteCss = "bg-slate-300";
  return (
    <div
      id="container"
      className={`h-screen grid place-items-center transition-colors duration-300 ${
        darkMode ? darkCss : liteCss
      }`}
    >
      <div
        id="card"
        className="w-72 p-4 bg-slate-100/20 shadow-xl border-2 border-gray-900/60 rounded-xl"
      >
        <div className="grid p-4 justify-end" onClick={handleModeToggle}>
          {darkMode ? <Sun /> : <Moon />}
        </div>
        <img src={pfp} alt="pfp" className="w-32 rounded-full m-auto" />
        <div className="mt-2">
          <p className="text-center text-lg font-bold">Jitesh Bhashwani</p>
          <p className="text-center font-bold text-orange-500">
            Front End Developer
          </p>
        </div>
        <hr className={`my-4 h-0.5 border-0 ${darkMode ? liteCss : darkCss}`} />

        <div className="flex justify-center">
          <Github className="m-2 border border-black p-1 rounded-full" />
          <Linkedin className="m-2 border border-black p-1 rounded-full" />
          <Codepen className="m-2 border border-black p-1 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default CardWithDarkMode;
