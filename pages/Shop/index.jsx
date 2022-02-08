import React from "react";
import ShopLayout from "./../../components/layout/ShopLayout";

function Home() {
  return (
    <div>
      <h1 className="text-8xl font-bold">shop home</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Home;
