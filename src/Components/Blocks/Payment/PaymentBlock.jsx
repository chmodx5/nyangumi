import React from "react";
import PaymentBlockItem from "./PaymentBlockItem";

export default function PaymentBlock() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <PaymentBlockItem />
        </div>
      </div>
    </div>
  );
}
