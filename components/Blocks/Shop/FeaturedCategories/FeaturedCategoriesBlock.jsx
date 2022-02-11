import React, { useRef } from "react";
import HeadingWithEffect from "../../../General/HeadingWithEffect";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MyButon from "../../../General/MyButon";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function FeaturedCategoriesBlock() {
  const myclicked = () => {
    console.log("clucked");
  };
  return (
    <section className="py-10">
      <div className="mycontainer">
        <div className="flex justify-between items-end mb-10 gap-10">
          <div className="">
            <HeadingWithEffect large title="featured categories" />
          </div>

          <div className="flex justify-center items-center gap-5">
            <span>
              <MyButon size="sm" icon={<AiOutlineLeft />} />
            </span>
            <MyButon size="sm" icon={<AiOutlineRight />} />
          </div>
        </div>
        <div className="flex gap-5 justify-between flex-wrap mt-6">
          {Array.from({ length: 9 }, (_, i) => (
            <FeaturedCategoryCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
