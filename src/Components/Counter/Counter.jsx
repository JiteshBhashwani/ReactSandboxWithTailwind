import React from "react";
import { useState } from "react";

function Counter() {
  const [i, seti] = useState(0);
  return (
    <div className="h-screen bg-gray-950 relative flex justify-center items-center">
      <h1 className="absolute text-white sm:text-8xl text-5xl top-12">
        COUNTER 📟
      </h1>
      <div className="flex gap-4 border border-white border-dotted items-center p-2">
        <div className="w-24">
          <h1 className="text-6xl text-right text-gray-200">{i}</h1>
        </div>
        <div className="flex flex-col">
          <button
            className="text-4xl"
            onClick={() => {
              seti((prev) => prev + 1);
            }}
          >
            {" "}
            {`🔼`}{" "}
          </button>
          <button
            className="text-4xl"
            onClick={() => {
              seti((prev) => prev - 1);
            }}
          >
            {" "}
            {`🔽`}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
