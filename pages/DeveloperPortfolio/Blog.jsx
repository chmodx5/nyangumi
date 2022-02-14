import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";

export default function Blog() {
  return (
    <div>
      <h1 className="text-8xl font-bold">Blog</h1>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
