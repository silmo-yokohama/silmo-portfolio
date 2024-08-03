import TopFirstView from "@/Components/Sections/TopFirstView";
import MainLayer from "@/Templates/MainLayer";
import TopLayout from "@/Templates/TopLayout";
import React from "react";

const Home = (props) => {
  return (
    <MainLayer>
      <TopLayout>
        <TopFirstView />

        <div
          className="grid grid-cols-3 m-auto"
          style={{ paddingTop: "100vh" }}
        >
          {/* {skills.data.allSkill.edges.map((item) => {
          return (
            <section>
              <h3>{item.node.name}</h3>
              <img src={item.node.skillACF.logo?.node.sourceUrl} />
            </section>
          );
        })} */}
        </div>
      </TopLayout>
    </MainLayer>
  );
};

export default Home;
