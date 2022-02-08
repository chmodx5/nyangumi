import React from "react";
import AboutBlockWithSliders from "../../Components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../../Components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../../Components/Blocks/Portfolio/PortfolioBlock";
import PaymentBlock from "../../Components/Blocks/Payment/PaymentBlock";
import Hero from "../../Components/Blocks/Hero/Hero";
import BlogBlock from "../../components/Blocks/Blog/BlogBlock";
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
      <PaymentBlock />
      <BlogBlock />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};

export default Home;
