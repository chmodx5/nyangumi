import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import NavLink from "./../Navbar/NavLink";

export default function MainLayout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <header>
        <Navbar
          logo={
            <span>
              <span className="text-primary-default">nya</span>
              <span>ngumi</span>
            </span>
          }
          navitems={
            <>
              <NavLink link="/" text="Home" />
            </>
          }
        />
      </header>
      <main className=" flex-1 mt-20">{children}</main>
      <Footer />
    </div>
  );
}
