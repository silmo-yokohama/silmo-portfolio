import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Marquee from "react-fast-marquee";
import SkillLevel from "@/Components/Share/Progress/SkillLevel";

const SkillsSection = ({ skills }) => {
  return (
    <div className="relative bg-neutral py-16 md:py-36 px-2 md:px-4">
      <div className="t md:max-w-6xl md:mx-auto flex flex-col text-neutral-content gap5 md:gap-20">
        <SectionTitle>My Skills</SectionTitle>
      </div>
      <Marquee speed={100} pauseOnHover={true}>
        <div className="flex justify-center items-center h-[45vw] md:h-[30vw] overflow-visible">
          {skills.data.allSkill.edges.map((skill, index) => {
            const name = skill.node.name;
            const rate = skill.node.skillACF.rate;
            const imagePath = skill.node.skillACF.logo.node.sourceUrl;

            return (
              <SkillItem
                name={name}
                skillLevel={rate}
                imagePath={imagePath}
                key={index}
              />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

const SkillItem = ({ name, skillLevel, imagePath }) => {
  let progressColor;
  if (skillLevel < 3) {
    progressColor = "bg-indigo-700";
  } else if (skillLevel < 7) {
    progressColor = "bg-warning";
  } else if (skillLevel >= 7) {
    progressColor = "bg-error";
  }

  return (
    <div
      className="glass w-[30vw] md:w-[20vw] h-[30vw] md:h-[20vw] relative transition-all duration-500 bg-slate-300 group flex flex-col justify-center items-center p-5 overflow-hidden
              hover:w-[40vw] hover:md:w-[22vw] hover:h-[40vw] md:hover:h-[25vw] hover:bg-accent hover:drop-shadow-xl md:hover:shadow-[0_25px_30px_-5px_rgba(0,0,0,0.3)]
              after:content-[''] after:absolute after:block after:transition-all after:duration-500 after:top-0 after:left-0 after:w-full after:h-full after:opacity-50 after:bg-black after:hover:opacity-0"
    >
      <h5 className="absolute en-title text-white w-full text-center top-[10px] md:top-[16px] transition-all duration-500 text-[4vw] md:text-[2.5vw] font-bold -translate-y-28 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
        {name}
      </h5>
      <div className="w-3/4 md:group-hover:w-2/3 transition-all duration-500 group-hover:translate-y-3 md:group-hover:translate-y-0">
        <img
          src={imagePath}
          alt={name}
          className="group-hover:drop-shadow-lg"
        />
      </div>

      {/*
      // Skill Level
      <div className="absolute flex flex-col text-center bottom-2 md:bottom-[24px] transition-all duration-500  translate-y-24 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 w-4/5">
        <SkillLevel levelRate={skillLevel} colorClass={progressColor} />
      </div> */}
    </div>
  );
};

export default SkillsSection;
