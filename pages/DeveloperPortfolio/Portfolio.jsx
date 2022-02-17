import React, { useRef, useEffect, useState } from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import PortfolioBlock from "./../../components/Blocks/Portfolio/PortfolioBlock";
import PortfolioItem from "./../../components/Blocks/Portfolio/PortfolioItem";

const items = [
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
];

export default function Portfolio() {
  const [filters, setFilters] = useState("");

  //getting categories from items and filtering them to ensure there are no duplicates
  const findDuplicates = (myarray) => {
    let uniqueArray = myarray.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
    return uniqueArray;
  };
  let filteredcategories = findDuplicates(items.map((item) => item.category));

  return (
    <>
      <div>
        <div className="mycontainer">
          <div className="py-4">
            <button
              className="px-3 py-3 hover:text-primary-default uppercase"
              onClick={() => {
                setFilters("");
              }}
            >
              all
            </button>
            {filteredcategories.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setFilters(item);
                }}
                className="px-3 py-3 hover:text-primary-default uppercase"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6">
            {filters == "" ? (
              <>
                {items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setFilters(item.category);
                    }}
                  >
                    <PortfolioItem
                      styleTwo
                      category={item.category}
                      title={item.title}
                      img={item.img}
                      link={item.link}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                {items.map((item, index) => (
                  <>
                    {item.category == filters && (
                      <div
                        key={index}
                        onClick={() => {
                          setFilters(item.category);
                        }}
                      >
                        <PortfolioItem
                          styleTwo
                          category={item.category}
                          title={item.title}
                          img={item.img}
                          link={item.link}
                        />
                      </div>
                    )}
                  </>
                ))}
              </>
            )}
            <p className=" text-fuchsia-700">{filters}</p>
          </div>
        </div>

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
