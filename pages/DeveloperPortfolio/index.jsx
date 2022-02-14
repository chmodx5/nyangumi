import React from "react";
import AboutBlockWithSliders from "../../components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../../components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../../components/Blocks/Portfolio/PortfolioBlock";
import PricingBlock from "../../components/Blocks/Pricing/PricingBlock";
import Hero from "../../components/Blocks/Hero/Hero";
import BlogBlock from "../../components/Blocks/Blog/BlogBlock";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import ImageContainer from "../../components/General/ImageContainer";
// import herobg from "./../../public/hero-bg.svg";

function Home() {
  return (
    <>
      <Hero
        smalltitle="Hello I&lsquo;m"
        title="w. onesmas"
        subtitle="a fullstack developer"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate "
        buttonlink="/DeveloperPortfolio/Portfolio"
        buttontext="discover more"
        bgimage={"./hero-bg.svg"}
        featuredimage={"https://source.unsplash.com/random"}
      />
      <ServicesBlock />
      <ImageContainer src="https://source.unsplash.com/random" alt="ffdf" />
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
