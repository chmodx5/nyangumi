import React from "react";
import AboutBlockWithSliders from "./../../components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "./../../components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "./../../components/Blocks/Portfolio/PortfolioBlock";
import PricingBlock from "./../../components/Blocks/Pricing/PricingBlock";
import Hero from "../../components/Blocks/Hero/Hero";
import BlogBlock from "./../../components/Blocks/Blog/BlogBlock";
import DeveloperPortfolioLayout from "./../../components/layout/DeveloperPortfolioLayout";

function Home() {
  return (
    <>
      <Hero
        smalltitle="Hello I&lsquo;m"
        title="someone awesome"
        subtitle="a web developer"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate "
        buttonlink="/"
        buttontext="discover more"
      />
      <ServicesBlock />
      <AboutBlockWithSliders />
      <PortfolioBlock />
      <PricingBlock />
      <BlogBlock />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};

export default Home;
