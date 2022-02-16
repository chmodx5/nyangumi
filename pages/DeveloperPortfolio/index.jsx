import React from "react";
import AboutBlockWithSliders from "../../components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../../components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../../components/Blocks/Portfolio/PortfolioBlock";
import Hero from "../../components/Blocks/Hero/Hero";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
// import BlogBlock from "../../components/Blocks/Blog/BlogBlock";
// import PricingBlock from "../../components/Blocks/Pricing/PricingBlock";
// import ImageContainer from "../../components/General/ImageContainer";
// import herobg from "./../../public/hero-bg.svg";

function Home() {
  return (
    <>
      <Hero
        smalltitle="Hello I&lsquo;m"
        title="someone awesome"
        subtitle="a fullstack developer"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate "
        buttonlink="/DeveloperPortfolio/Portfolio"
        buttontext="discover more"
        bgimage={"./hero-bg.svg"}
        featuredimage={"https://source.unsplash.com/random"}
      />
      <AboutBlockWithSliders
        subtitle="about me"
        title="i am a passionate expert web developer from kenya"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate"
        buttonlink="/0"
        buttontext="donwload cv"
        sliders={[
          {
            title: "UI/UX design",
            progress: "90",
          },
          {
            title: "Branding",
            progress: "90",
          },
          {
            title: "E-commerce",
            progress: "80",
          },
          {
            title: "Web development",
            progress: "98",
          },
        ]}
      />
      <ServicesBlock />
      <PortfolioBlock />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};

export default Home;
