import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl  en-title text-center md:text-left md:text-6xl italic !leading-[0.9] tracking-tighter w-auto md:w-48">
      {children}
    </h2>
  );
};

export default SectionTitle;
