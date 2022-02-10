import React from "react";
import StoreServicesCard from "./StoreServicesCard";

export default function StoreServicesBlock() {
  return (
    <section className="py-10">
      <div className="mycontainer">
        <div className="grid grid-cols-10 gap-4">
          {Array.from({ length: 5 }, (_, i) => (
            <div className="col-span-2">
              <StoreServicesCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
