import React from "react";
import HeadingWithEffect from "../../../General/HeadingWithEffect";
import Button from "./../../../General/Button";
import BestSellerCard from "./BestSellerCard";

export default function BestSellers() {
  return (
    <section className="py-10">
      <div className="mycontainer">
        <div className="mb-10">
          <HeadingWithEffect large title="daily best sales" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden md:block col-span-3 bg-red-300 bg-[url('https://source.unsplash.com/random')] text-white  relative">
            <div className="  w-full h-full bg-primary-default/40 p-16 ">
              <div>
                <h2 className="text-3xl font-bold">
                  {" "}
                  Bring nature into your home
                </h2>
              </div>
              <div className="mt-32 ">
                <Button link="/" small text="Shop Now" />
              </div>
            </div>
          </div>
          <div className=" col-span-12 md:col-span-9">
            <div className="grid grid-cols-12  gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div className="col-span-6 md:col-span-3">
                  <BestSellerCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
