import React from "react";
import { TiTick } from "react-icons/ti";
import Button from "./../../General/Button";
import "./styles.css";

export default function PaymentBlockItem() {
  return (
    <div className="w-full bg-primary-default/5 p-10 flex flex-col items-center">
      <h5 className="uppercase font-bold text-xl ">basic</h5>
      <br />
      <h1 className="font-bold text-primary-default text-7xl">
        <span className=" text-xl">$</span>
        11.19
        <span className="text-xl">/mo</span>
      </h1>

      <ul className="mt-10 mb-16">
        <li className="payment-features-list-item">
          <TiTick />
          <p>Awesome Features</p>
        </li>
        <li className="payment-features-list-item">
          <TiTick />
          <p>Responsive pricing table</p>
        </li>
        <li className="payment-features-list-item">
          <TiTick />
          <p>Yearly subscription</p>
        </li>
        <li className="payment-features-list-item">
          <TiTick />
          <p>Professional design</p>
        </li>
      </ul>
      <Button link="/" text="subscribe" />
    </div>
  );
}
