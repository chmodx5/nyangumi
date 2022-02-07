import React from "react";
import { TiTick } from "react-icons/ti";
import Button from "./../../General/Button";

export default function PaymentBlock() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <div className="">
            <h5>basic</h5>
            <h1>
              <span>$</span>
              11.19
              <span>/mo</span>
            </h1>
            <ul>
              <li>
                <TiTick />
                <p>Awesome Features</p>
              </li>
              <li>
                <TiTick />
                <p>Responsive pricing table</p>
              </li>
              <li>
                <TiTick />
                <p>Yearly subscription</p>
              </li>
              <li>
                <TiTick />
                <p>Professional design</p>
              </li>
            </ul>
            <Button link="/" text="subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
}
