import React from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import AboutBlockWithSliders from "../Components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../Components/Blocks/Services/ServicesBlock";

function Main() {
  return (
    <MainLayout>
      <ServicesBlock />
      <AboutBlockWithSliders />
    </MainLayout>
  );
}

export default Main;
