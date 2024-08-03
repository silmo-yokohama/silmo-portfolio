import Scroll from "@/Components/Share/Animations/Scroll";
import React from "react";

const FirstView = () => {
  const imgPath = "/images/photo/yokohama.jpg";

  return (
    <div
      className="hero min-h-screen fixed -z-10"
      style={{
        backgroundImage: `url(${imgPath})`,
      }}
    >
      <div className="t hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="t digital text-5xl md:text-7xl mb-5 text-5xl font-bold">
            Hello World!
          </h1>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default FirstView;
