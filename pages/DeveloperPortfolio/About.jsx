import React from "react";
import AboutBlockOne from "../../components/Blocks/About/AboutBlockOne";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";

export default function About() {
  return (
    <div>
      <AboutBlockOne />
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
