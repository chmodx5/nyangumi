import React, { useRef, useEffect, useState } from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import PortfolioBlock from "./../../components/Blocks/Portfolio/PortfolioBlock";
import PortfolioItem from "./../../components/Blocks/Portfolio/PortfolioItem";

import Head from "next/head";

export default function Portfolio() {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  let portfolioitems = [
    {
      filtercategory: "Web",
      category: "Web",
    },
    {
      filtercategory: "Web",
      category: "Web",
    },
    {
      filtercategory: "fruits",
      category: "Web",
    },
    {
      filtercategory: "fruits",
      category: "Web",
    },
    {
      filtercategory: "Web",
      category: "Web",
    },
    {
      filtercategory: "Web",
      category: "Web",
    },
  ];
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"
        ></script>
      </Head>
      <div>
        <>
          <ul>
            <li onClick={handleFilterKeyChange("*")}>Show Both</li>
            <li onClick={handleFilterKeyChange("vege")}>Show Veges</li>
            <li onClick={handleFilterKeyChange("fruit")}>Show Fruits</li>
          </ul>
          <hr />
          <ul className="filter-container mycontainer flex ">
            {Array.from({ length: 10 }, (_, i) => (
              <div className="filter-item vege w-3/12  inline-block p-3">
                <span>Cucumber</span>
                <PortfolioItem
                  styleTwo
                  category="x"
                  title="item"
                  img="https://source.unsplash.com/random/400x400"
                  link="/"
                />
              </div>
            ))}

            <div className="filter-item  fruit  w-3/12 p-3">
              <span>Apple</span>
              <PortfolioItem
                styleTwo
                category="x"
                title="item"
                img="https://source.unsplash.com/random/400x400"
                link="/"
              />
            </div>
            <div className="filter-item fruit  w-3/12 p-3">
              <span>Orange</span>
              <PortfolioItem
                styleTwo
                category="x"
                title="item"
                img="https://source.unsplash.com/random/400x400"
                link="/"
              />
            </div>
            <div className="filter-item fruit vege  w-3/12 p-3">
              <span>Tomato</span>
              <PortfolioItem
                styleTwo
                category="x"
                title="item"
                img="https://source.unsplash.com/random/400x400"
                link="/"
              />
            </div>
          </ul>
        </>

        <PortfolioBlock
          subtitle="portfolios"
          title="my latest works"
          portfolioitems={[
            {
              category: "branding",
              title: "Someone Else",
              img: "https://source.unsplash.com/cauCwvTkHLM",
              link: "/",
            },
            {
              category: "design",
              title: "waste board",
              img: "https://source.unsplash.com/AGZAliGQmP4",
              link: "/",
            },
            {
              category: "development",
              title: "disastrous elated",
              img: "https://source.unsplash.com/Da0pdCekeUs",
              link: "/",
            },
            {
              category: "development",
              title: "library scent",
              img: "https://source.unsplash.com/RDolnHtjVCY",
              link: "/",
            },
            {
              category: "design",
              title: "flight lacking",
              img: "https://source.unsplash.com/HI6gy-p-WBI",
              link: "/",
            },
            {
              category: "design",
              title: "finger licking",
              img: "https://source.unsplash.com/KDdNjUQwzSw",
              link: "/",
            },
          ]}
        />
      </div>
    </>
  );
}
Portfolio.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
