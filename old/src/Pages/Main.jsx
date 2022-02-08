import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AboutBlockWithSliders from "../../../components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../../../components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../../../components/Blocks/Portfolio/PortfolioBlock";
import PaymentBlock from "../../../components/Blocks/Payment/PaymentBlock";
import Hero from "../../../components/Blocks/Hero/Hero";
import BlogBlock from "../../../components/Blocks/Blog/BlogBlock";

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
