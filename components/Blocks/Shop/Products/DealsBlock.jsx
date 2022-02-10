import React from "react";
import HeadingWithEffect from "../../../General/HeadingWithEffect";
import DealsCard from "./DealsCard";

export default function DealsBlock() {
  return (
    <section className="py-10">
      <div className="mycontainer pb-10">
        <HeadingWithEffect large title="Deals of the day" />
      </div>
      <div className="mycontainer grid md:grid-cols-4 grid-cols-2 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <DealsCard />
        ))}
      </div>
    </section>
  );
}
