import React from "react";
import ShopLayout from "./../../components/layout/ShopLayout";
import FeaturedCategoriesBlock from "../../components/Blocks/Shop/FeaturedCategories/FeaturedCategoriesBlock";

import PopularProducts from "../../components/Blocks/Shop/Products/PopularProducts";

function Home() {
  return (
    <div>
      <FeaturedCategoriesBlock />
      <PopularProducts />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Home;
