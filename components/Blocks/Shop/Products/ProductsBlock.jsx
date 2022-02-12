import React from "react";
import HeadingWithEffect from "./../../../General/HeadingWithEffect";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductsBlock() {
  return (
    <section className="py-10">
      <div className="mycontainer">
        <HeadingWithEffect large title="trending items" />
        <div className="grid grid-cols-5 mt-6 gap-5 ">
          {Array.from({ length: 5 }, (_, i) => (
            <ProductCard minimal />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/">
            <a className="bg-primary-default px-3 py-2 inline-block text-white font-bold uppercase hover:bg-primary-light">
              more items
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
