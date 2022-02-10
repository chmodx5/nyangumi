import React from "react";
import Image from "next/image";

export default function FeaturedCategoryCard() {
  return (
    <div className=" w-40 shadow-md hover:shadow-xl border border-gray-200 group ">
      <div>
        <div className="bg-blue-300 aspect-w-1 aspect-h-1">
          <Image
            src="https://source.unsplash.com/4OyLq2yN9u0"
            alt="featured category"
            className="w-full h-full object-center object-cover group-hover:scale-150 "
            layout="fill"
            priority
          />
        </div>
      </div>
      <div className="pb-4 pt-2">
        <h6 className="font-bold text-center group-hover:text-primary-default">
          Snack
        </h6>
        <p className=" text-xs text-center">56 Items</p>
      </div>
    </div>
  );
}
