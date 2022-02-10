import React from "react";
import Button from "../../../General/Button";
import Rating from "./Rating";
import Slider from "./Slider";
import Image from "next/image";
import Link from "next/link";

export default function BestSellerCard() {
  return (
    <div className="border border-gray-300 ">
      <div>
        <div className="bg-blue-300 relative aspect-w-1 aspect-h-1">
          <Image
            src="https://source.unsplash.com/random"
            alt="{page.title}"
            className="w-full h-full object-center object-cover "
            layout="fill"
            priority
          />
        </div>
      </div>
      <div className="p-2">
        <small className=" capitalize text-gray-400">someone foods</small>
        <p className="font-bold ">Blue seeds of change sweet and wommies</p>
        <Rating rating="3" numReviews="4" />

        <p className="mt-6 mb-2 font-bold text-primary-default">
          <span>$</span>
          <span>342.45</span>
          <span className="text-gray-400 line-through ml-2 text-sm">
            <span>$</span>
            <span>342.45</span>
          </span>
        </p>
        <Slider val={70} fixedval={100} />
        <small>
          Sold: <span>90</span>/ <span>120</span>
        </small>

        <div className="mt-4 flex flex-1">
          <utton text="add to cart" link="/" />
          <Link href="/">
            <a className="btn w-full text-center">add to cart</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
