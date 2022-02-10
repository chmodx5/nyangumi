import React from "react";
import ImageContainer from "../../../General/ImageContainer";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

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
        <small className="capitalize text-xs ">snack</small>
        <h5 className="font-bold">
          All natural itallian style chicken meat balls
        </h5>
        {/* <Rating /> */}
        <p className="capitalize text-xs">
          By <span className="text-primary-default">Someone</span>
        </p>
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
          <button className="flex items-center gap-2 bg-primary-default px-2 py-1 text-white uppercase">
            <FiShoppingCart />
            add
          </button>
        </div>
      </div>
    </div>
  );
}
