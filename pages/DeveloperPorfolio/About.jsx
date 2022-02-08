import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";

export default function About() {
  return (
    <div>
      <h1 className="text-8xl font-bold">about</h1>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
