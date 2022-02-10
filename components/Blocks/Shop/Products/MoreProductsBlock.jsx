import React from "react";
import HeadingWithEffect from "./../../../General/HeadingWithEffect";
import MoreProductsCard from "./MoreProductsCard";

export default function MoreProductsBlock() {
  return (
    <section className="py-10">
      <div className="mycontainer">
        <HeadingWithEffect title="other items you may like" />
        <br />
        <div className="grid grid-cols-4 gap-5">
          {Array.from({ length: 12 }, (_, i) => (
            <MoreProductsCard />
          ))}
        </div>
      </div>
    </section>
  );
}
