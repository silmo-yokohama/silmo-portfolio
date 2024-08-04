import LangMarquee from "@/Components/Sections/Common/LangMarquee";
import FirstView from "@/Components/Sections/Home/FirstView";
import NewsStatusSection from "@/Components/Sections/Home/NewsStatusSection";
import SkillsSection from "@/Components/Sections/Home/SkillsSection";
import Header from "@/Components/Share/Header/Header";
import MainLayer from "@/Templates/MainLayer";
import React from "react";

const Home = (props) => {
  const { news, skills } = props;

  return (
    <MainLayer>
      <Header />
      <FirstView />
      <div className="pt-[100dvh] ">
        <NewsStatusSection news={news} />
        <div className="t divider bg-primary-content m-0"></div>
        <SkillsSection skills={skills} />

        <LangMarquee />
      </div>
    </MainLayer>
  );
};

export default Home;
