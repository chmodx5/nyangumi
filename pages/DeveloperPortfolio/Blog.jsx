import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import Breadcrumbs from "../../components/Blocks/Breadcrumbs/Breadcrumbs";

export default function Blog() {
  return (
    <div>
      <Breadcrumbs title="blog" />
      <h1 className="text-8xl font-bold">Blog</h1>
    </div>
  );
}

Blog.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
