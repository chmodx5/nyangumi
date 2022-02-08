import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import NavLink from "./../Navbar/NavLink";

export default function DeveloperPortfolioLayout({ children }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <header>
        <Navbar
          logo={
            <span>
              <span className="text-primary-default">Someone</span>
              <span>awesome</span>
            </span>
          }
          navitems={
            <>
              <NavLink link="/DeveloperPorfolio" text="Home" />
              <NavLink link="/DeveloperPorfolio/About" text="About" />
              <NavLink link="/DeveloperPorfolio/Portfolio" text="Portfolio" />
              <NavLink link="/DeveloperPorfolio/Contact" text="Contact" />
            </>
          }
        />
      </header>
      <main className=" flex-1 mt-20">{children}</main>
      <Footer />
    </div>
  );
}
