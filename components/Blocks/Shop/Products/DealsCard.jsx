import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import { FiShoppingCart } from "react-icons/fi";

export default function DealsCard() {
  return (
    <div className="border border-gray-300">
      <div className="w-full h-full ">
        <div className=" ">
          <div className="bg-blue-300 -z-10 relative aspect-w-1 aspect-h-1 ">
            <Image
              src="https://source.unsplash.com/random"
              alt="{page.title}"
              className="w-full h-full object-center object-cover "
              layout="fill"
              priority
            />
          </div>
        </div>
        <div className="bg-white -mt-20 mx-6 z-0 p-4">
          <p className="font-bold">Lorem ipsum dolor, sit amet consectetur </p>
          <Rating rating={3.6} numReviews={8} />
          <small>
            By <span className="text-primary-default">Nestfoods</span>
          </small>
          <br />
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
    </div>
  );
}
