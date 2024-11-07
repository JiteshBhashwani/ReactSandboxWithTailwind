import React from "react";

function FirstPage() {
  return (
    <div className="h-screen bg-stone-950 grid place-items-center select-none">
      <div>
        <h1
          className="text-gray-200 text-4xl max-sm:text-2xl text-center w-fit "
          style={{
            fontWeight: "lighter",
            letterSpacing: "0.2rem",
          }}
        >
          HEY👋 THERE I'M
        </h1>
        <h1
          className="text-gray-200 text-8xl max-sm:text-6xl text-center w-fit "
          style={{ letterSpacing: "0.4rem" }}
        >
          JITESH
        </h1>
        <p className="text-orange-400 font-bold tracking-wider">
          Front-end Developer.
        </p>
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          Welcome to my React and Tailwind sandbox! This is a collection of
          mini-projects and experimental components that I built while learning.
          Note:{" "}
          <strong className="text-orange-400">This is not my portfolio</strong>,
          but a showcase of what I’ve explored and practiced.
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
