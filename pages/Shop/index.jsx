import React from "react";
import ShopLayout from "./../../components/layout/ShopLayout";
import FeaturedCategoriesBlock from "../../components/Blocks/Shop/FeaturedCategories/FeaturedCategoriesBlock";

import PopularProductsBlock from "../../components/Blocks/Shop/Products/PopularProductsBlock";
import BestSellers from "../../components/Blocks/Shop/Products/BestSellers";
import DealsBlock from "../../components/Blocks/Shop/Products/DealsBlock";
import MoreProductsBlock from "../../components/Blocks/Shop/Products/MoreProductsBlock";
import StoreServicesBlock from "../../components/Blocks/Shop/Products/StoreServicesBlock";
import ProductsBlock from "../../components/Blocks/Shop/Products/ProductsBlock";

function Home() {
  return (
    <div>
      <FeaturedCategoriesBlock />
      <ProductsBlock />
      <PopularProductsBlock />
      <BestSellers />
      <DealsBlock />
      <MoreProductsBlock />
      <StoreServicesBlock />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default Home;
