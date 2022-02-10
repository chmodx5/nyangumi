import React from "react";
import HeadingWithEffect from "../../../General/HeadingWithEffect";
import ProductCard from "./ProductCard";

export default function PopularProducts() {
  return (
    <section className="py-10">
      <div className="mycontainer">
        <div className="">
          <HeadingWithEffect large title="popular products" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          {Array.from({ length: 18 }, (_, i) => (
            <div className="col-span-2">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
