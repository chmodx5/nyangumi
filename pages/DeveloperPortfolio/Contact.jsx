import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";

export default function Contact() {
  return (
    <div>
      <h1 className="text-8xl font-bold">contact</h1>
    </div>
  );
}
Contact.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
