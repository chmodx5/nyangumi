import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-8xl font-bold">portfolio</h1>
    </div>
  );
}
Portfolio.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
