import FirstView from "@/Components/Sections/Home/FirstView";
import Header from "@/Components/Share/Header/Header";
import MainLayer from "@/Templates/MainLayer";
import React from "react";

const Home = (props) => {
  return (
    <MainLayer>
      <Header />
      <FirstView />
      <div className="pt-[100dvh] "></div>
    </MainLayer>
  );
};

export default Home;
