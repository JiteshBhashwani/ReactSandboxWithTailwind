import React from "react";
import { useState } from "react";

function BGColorChanger() {
  const [color, setColor] = useState("bg-zinc-800");
  return (
    <div
      className={`h-screen flex items-center justify-center relative select-none ${color}`}
    >
      <h1 className="absolute text-center bg-gray-800/10 text-white sm:text-8xl text-5xl top-12">
        COLOR CHANGER🌈
      </h1>
      <div className="bg-white w-fit rounded-sm shadow-2xl border border-zinc-100 flex max-sm:flex-col">
        <button
          className="border border-black bg-zinc-800 hover:bg-zinc-950 active:bg-zinc-800 text-white rounded-md m-4 px-4"
          onClick={() => setColor("bg-zinc-800")}
        >
          Dark
        </button>
        <button
          className="border border-black active:bg-white hover:bg-zinc-300 rounded-md m-4 px-4"
          onClick={() => setColor("bg-white")}
        >
          Light
        </button>
        <button
          className="border border-black bg-yellow-400 active:bg-yellow-400 hover:bg-yellow-600 rounded-md m-4 px-4"
          onClick={() => setColor("bg-yellow-400")}
        >
          Reader
        </button>
      </div>
    </div>
  );
}

export default BGColorChanger;
