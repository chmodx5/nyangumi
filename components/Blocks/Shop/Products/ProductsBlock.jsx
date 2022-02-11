import React from "react";
import HeadingWithEffect from "./../../../General/HeadingWithEffect";
import ProductCard from "./ProductCard";

export default function ProductsBlock() {
  return (
    <section className="py-10">
      <div className="mycontainer">
        <HeadingWithEffect large title="trending items" />
        <div className="grid grid-cols-5 mt-6 gap-5 ">
          {Array.from({ length: 10 }, (_, i) => (
            <ProductCard minimal />
          ))}
        </div>
      </div>
    </section>
  );
}
