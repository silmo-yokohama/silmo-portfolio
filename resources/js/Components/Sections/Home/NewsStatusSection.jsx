import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { dateFormat } from "@/Functions/date";

const NewsStatusSection = ({ news }) => {
  return (
    <div className="relative bg-neutral py-16 md:py-36 px-2 md:px-4">
      <div className="t md:max-w-6xl md:m-auto flex flex-col md:flex-row text-neutral-content gap5 md:gap-20 items-center">
        <SectionTitle>
          News & <br className="hidden md:block" />
          Status
        </SectionTitle>

        <ul className="flex-grow w-full md:w-auto">
          {news.data.allNewsStatus.nodes.map((item, index) => {
            const date = dateFormat(item.date);

            return <List date={date} text={item.title} key={index} />;
          })}
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
