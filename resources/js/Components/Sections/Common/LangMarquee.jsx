import React from "react";
import Marquee from "react-fast-marquee";

const LangMarquee = () => {
  return (
    <Marquee className="w-full bg-neutral en-title" speed={120}>
      <div className="flex gap-4 italic font-bold text-[10vw] mr-4">
        <span className="text-primary-content">JavaScript</span>
        <span className="text-primary">React</span>
        <span className="text-secondary-content">Vue.js</span>
        <span className="text-secondary">Angular</span>
        <span className="text-primary-content">Svelte</span>
        <span className="text-primary">PHP</span>
        <span className="text-secondary-content">WordPress</span>
        <span className="text-secondary">Inertia.js</span>
      </div>
    </Marquee>
  );
};

export default LangMarquee;
