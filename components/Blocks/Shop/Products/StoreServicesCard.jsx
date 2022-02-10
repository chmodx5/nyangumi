import React from "react";
import Rating from "./Rating";
import Image from "next/image";

export default function StoreServicesCard() {
  return (
    <div className=" grid gap-2 grid-cols-12 bg-primary-default/10  py-4 p-2">
      <div className="col-span-4 relative my-auto  w-full h-full  ">
        <Image
          src="https://source.unsplash.com/random"
          alt="{page.title}"
          className=" w-full h-full object-center object-cover "
          layout="fill"
          priority
        />
      </div>

      <div className="col-span-8">
        <p className="font-bold">Lorem ipsum dolor, </p>
        <p className="text-gray-400 text-sm capitalize"> mega discounts</p>
      </div>
    </div>
  );
}
