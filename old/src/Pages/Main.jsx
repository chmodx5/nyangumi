import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AboutBlockWithSliders from "../Components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../Components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../Components/Blocks/Portfolio/PortfolioBlock";
import PaymentBlock from "../Components/Blocks/Payment/PaymentBlock";
import Hero from "../Components/Blocks/Hero/Hero";
import BlogBlock from "../Components/Blocks/Blog/BlogBlock";

function Main() {
  return (
    <MainLayout>
      <Hero />
      <ServicesBlock />
      <AboutBlockWithSliders />
      <PortfolioBlock />
      <PaymentBlock />
      <BlogBlock />
    </MainLayout>
  );
}

export default Main;
