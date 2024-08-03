import React from "react";
import "../../../../css/scroll-animation.css";

const Scroll = () => {
  return (
    <div className="flex items-center flex-col mt-[76vh]">
      <div className="p-scroll-mouse"></div>
      <p className="p-scroll-text text-primary">Scroll</p>
    </div>
  );
};

export default Scroll;
