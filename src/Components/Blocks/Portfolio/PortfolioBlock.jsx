import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioBlock() {
  let portfolioItems = [
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
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <HeadingWithEffect
          title="recent completed projects"
          large
          centered
          subtitle="portfolios"
        />
        <br />
        <br />
        <div className="grid grid-cols-12 gap-6 ">
          {portfolioItems.map((item, index) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
              <PortfolioItem
                styleOne
                key={index}
                category={item.category}
                title={item.title}
                img={item.img}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
