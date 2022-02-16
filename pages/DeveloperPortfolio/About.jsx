import React from "react";
import AboutBlockOne from "../../components/Blocks/About/AboutBlockOne";
import ServicesBlock from "../../components/Blocks/Services/ServicesBlock";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";

export default function About() {
  return (
    <div>
      <AboutBlockOne />
      <ServicesBlock
        title="services"
        services={[
          {
            icon: "FaPencilRuler",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaRegLightbulb",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaOpencart",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaPencilRuler",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaRegLightbulb",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaOpencart",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
        ]}
      />
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
