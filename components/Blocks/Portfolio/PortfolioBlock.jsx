import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioBlock({ subtitle, title, portfolioitems }) {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <HeadingWithEffect title={title} large centered subtitle={subtitle} />
        <br />
        <br />

        <div className="grid grid-cols-12 gap-12 ">
          {portfolioitems.map((item, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 md:col-span-4"
            >
              <PortfolioItem
                styleTwo
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
