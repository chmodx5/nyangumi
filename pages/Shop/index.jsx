import React from "react";
import ShopLayout from "./../../components/layout/ShopLayout";
import FeaturedCategoriesBlock from "../../components/Blocks/Shop/FeaturedCategories/FeaturedCategoriesBlock";

import PopularProductsBlock from "../../components/Blocks/Shop/Products/PopularProductsBlock";
import BestSellers from "../../components/Blocks/Shop/Products/BestSellers";
import DealsBlock from "../../components/Blocks/Shop/Products/DealsBlock";
import MoreProductsBlock from "../../components/Blocks/Shop/Products/MoreProductsBlock";

function Home() {
  return (
    <div>
      <FeaturedCategoriesBlock />
      <PopularProductsBlock />
      <BestSellers />
      <DealsBlock />
      <MoreProductsBlock />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Home;
