import FirstView from "@/Components/Sections/Home/FirstView";
import NewsStatusSection from "@/Components/Sections/Home/NewsStatusSection";
import Header from "@/Components/Share/Header/Header";
import MainLayer from "@/Templates/MainLayer";
import React from "react";

const Home = (props) => {
  const { news } = props;

  return (
    <MainLayer>
      <Header />
      <FirstView />
      <div className="pt-[100dvh] ">
        <NewsStatusSection news={news} />
      </div>
    </MainLayer>
  );
};

export default Home;
