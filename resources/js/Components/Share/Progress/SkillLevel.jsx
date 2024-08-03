import React from "react";

const SkillLevel = ({ levelRate, colorClass }) => {
  const width = levelRate * 10;

  return (
    <div className="w-full rounded-full bg-gray-400">
      <div
        className={`rounded-full  p-0.5 text-center text-blue-300 ${colorClass}`}
        style={{ width: `${width}%` }}
      >
        <span className="text-white hidden md:inline md:text-md">
          Lv.{levelRate}
        </span>
      </div>
    </div>
  );
};

export default SkillLevel;
