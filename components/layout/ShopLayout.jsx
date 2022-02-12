import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

export default function ShopLayout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <header>
        <Navbar
          logo={
            <span>
              {" "}
              <span className="text-primary-default">a-</span>shop
            </span>
          }
        />
      </header>
      <main className=" flex-1 mt-20">{children}</main>
      <Footer />
    </div>
  );
}
