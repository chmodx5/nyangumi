import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AboutBlockWithSliders from "../Components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../Components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../Components/Blocks/Portfolio/PortfolioBlock";

function Main() {
  return (
    <MainLayout>
      <ServicesBlock />
      <AboutBlockWithSliders />
      <PortfolioBlock />
    </MainLayout>
  );
}

export default Main;
