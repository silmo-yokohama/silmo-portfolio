import Header from "@/Components/Share/Header/Header";
import { Head } from "@inertiajs/react";
import React from "react";

const TopLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SilMo.jp</title>
        <meta
          name="description"
          content="フリーランスエンジニア・清水陽平のホームページ"
        />
      </Head>
      <div>
        <Header />

        {children}
      </div>
    </>
  );
};

export default TopLayout;
