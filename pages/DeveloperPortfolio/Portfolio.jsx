import React, { useRef, useEffect, useState } from "react";
import IsotopeGrid from "../../components/Blocks/Portfolio/IsotopeGrid";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import Breadcrumbs from "../../components/Blocks/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

export default function Portfolio() {
  //getting categories from items and filtering them to ensure there are no duplicates

  return (
    <>
      <div>
        <Breadcrumbs title="Portfolio" />
        <IsotopeGrid />
      </div>
    </>
  );
}
Portfolio.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
