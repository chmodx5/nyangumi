import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AboutBlockWithSliders from "../Components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../Components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../Components/Blocks/Portfolio/PortfolioBlock";
import PaymentBlock from "../Components/Blocks/Payment/PaymentBlock";

function Main() {
  return (
    <MainLayout>
      <ServicesBlock />
      <AboutBlockWithSliders />
      <PortfolioBlock />
      <PaymentBlock />
    </MainLayout>
  );
}

export default Main;
