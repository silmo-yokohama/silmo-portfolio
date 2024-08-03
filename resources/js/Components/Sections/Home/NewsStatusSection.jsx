import React from "react";
import SectionTitle from "../Common/SectionTitle";

const NewsStatusSection = () => {
  return (
    <div className="relative bg-neutral py-16 md:py-36 px-2 md:px-4">
      <div className="t md:max-w-6xl md:m-auto flex flex-col md:flex-row text-neutral-content gap5 md:gap-20 items-center">
        <SectionTitle>
          News & <br className="hidden md:block" />
          Status
        </SectionTitle>

        <ul className="flex-grow w-full md:w-auto">
          <List date="2024.01.01" text="テスト1" />
          <List date="2024.01.01" text="テスト2" />
          <List date="2024.01.01" text="テスト3" />
        </ul>
      </div>
    </div>
  );
};

const List = ({ date, text }) => {
  return (
    <li className="flex gap-5 py-7 items-center  border-b border-dashed border-accent">
      <span>{date}</span>
      <p>{text}</p>
    </li>
  );
};

export default NewsStatusSection;
