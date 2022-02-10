import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import FeaturedCategoryCard from "./FeaturedCategoryCard";

export default function FeaturedCategoriesBlock() {
  return (
    <section className="py-20">
      <div className="mycontainer">
        <div className="flex gap-10">
          <div className="inline-flex">
            <HeadingWithEffect large title="featured categories" />
          </div>
          <div className=" flex-grow flex justify-between items-end">
            {/* <div className="flex gap-2">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 uppercase"
              >
                groceries
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 uppercase"
              >
                groceries
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 uppercase"
              >
                groceries
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 uppercase"
              >
                groceries
              </a>
            </div> */}
          </div>
        </div>
        <div className="flex gap-6 flex-wrap mt-6">
          {Array.from({ length: 10 }, (_, i) => (
            <FeaturedCategoryCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
