import React from "react";
import ShopLayout from "./../../components/layout/ShopLayout";
import FeaturedCategoriesBlock from "../../components/Blocks/Shop/FeaturedCategories/FeaturedCategoriesBlock";

import PopularProductsBlock from "../../components/Blocks/Shop/Products/PopularProductsBlock";
import BestSellers from "../../components/Blocks/Shop/Products/BestSellers";

function Home() {
  return (
    <div>
      <FeaturedCategoriesBlock />
      <PopularProductsBlock />
      <BestSellers />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Home;
