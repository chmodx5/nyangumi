import React from "react";
import Rating from "./Rating";
import Image from "next/image";

export default function MoreProductsCard() {
  return (
    <div className=" grid gap-2 grid-cols-12">
      <div className="col-span-4 bg-blue-300 relative my-auto  w-full h-full  ">
        <Image
          src="https://source.unsplash.com/random"
          alt="{page.title}"
          className=" w-full h-full object-center object-cover "
          layout="fill"
          priority
        />
      </div>

      <div className="col-span-8">
        <p className="font-bold">Lorem ipsum dolor, sit amet consectetur </p>
        <Rating rating={3.6} numReviews={8} />

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
        </div>
      </div>
    </div>
  );
}
