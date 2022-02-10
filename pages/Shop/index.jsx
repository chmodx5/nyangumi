import React from "react";
import ShopLayout from "./../../components/layout/ShopLayout";
import FeaturedCategoriesBlock from "../../components/Blocks/FeaturedCategories/FeaturedCategoriesBlock";

function Home() {
  return (
    <div>
      <FeaturedCategoriesBlock />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Home;
