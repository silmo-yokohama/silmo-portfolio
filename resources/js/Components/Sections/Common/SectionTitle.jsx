import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h2
      className="relative text-4xl en-title text-center md:text-left md:text-6xl italic !leading-[0.9] tracking-tighter w-auto z-10 mb-6 md:mb-0 w-fit mx-auto md:mx-0
                  after:absolute after:block after:bg-primary  after:-z-10
                  after:left-0 after:bottom-0 after:h-4 after:w-full
                  md:after:-left-10 md:after:-top-10 md:after:w-32 md:after:h-32 md:after:rounded-full
    "
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
