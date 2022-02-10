import React, { useRef } from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FeaturedCategoriesBlock() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-20">
      <div className="mycontainer">
        <div className="flex justify-between items-end mb-10 gap-10">
          <div className="">
            <HeadingWithEffect large title="featured categories" />
          </div>

          <div className=" gap-5">
            <button
              //     onClick={next}
              className=" bg-primary-default text-white px-4 py-2"
            >
              next
            </button>
            <button
              //     onClick={back}
              className=" bg-primary-default text-white px-4 py-2"
            >
              prev
            </button>
          </div>
        </div>
        {/* <div className="flex gap-6 flex-wrap mt-6">
          {Array.from({ length: 10 }, (_, i) => (
            <FeaturedCategoryCard key={i} />
          ))}
        </div> */}
        <Slider {...settings}>
          {Array.from({ length: 10 }, (_, i) => (
            <FeaturedCategoryCard key={i} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
