import React from "react";
import ImageContainer from "../../../General/ImageContainer";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Rating from "./Rating";

export default function ProductCard() {
  return (
    <div className="border border-gray-300 pb-2">
      <div className="bg-blue-300 relative w-full aspect-w-1 aspect-h-1">
        <Image
          src={`https://source.unsplash.com/random/`}
          alt="{alt}"
          className="w-full h-full object-center object-cover "
          layout="fill"
          priority
        />
      </div>
      <div className="px-2">
        <small className="capitalize text-xs text-gray-500">snack</small>
        <h5 className="font-bold">
          All natural itallian style chicken meat balls
        </h5>
        {/* <Rating /> */}
        <p className="capitalize text-xs mt-2 mb-2 text-gray-500">
          By <span className="text-primary-default">Someone</span>
        </p>
        <Rating rating={3.5} numReviews="3" />
        <div className="flex justify-between mt-4  ">
          <div className="flex gap-2  items-center ">
            <p className="font-bold">
              <span>$</span>
              <span>10.00</span>
            </p>
            <p className="font-bold text-gray-400 text-sm line-through">
              <span>$</span>
              <span>15.00</span>
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary-default/20  px-2 py-1 text-primary-default font-bold uppercase hover:bg-primary-default hover:text-white">
            <FiShoppingCart />
            add
          </button>
        </div>
      </div>
    </div>
  );
}
