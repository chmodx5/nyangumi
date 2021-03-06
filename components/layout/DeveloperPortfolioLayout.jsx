import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import NavLink from "./../Navbar/NavLink";
import Head from "next/head";

export default function DeveloperPortfolioLayout({ children }) {
  return (
    <>
      <Head>
        <title>Dev layout</title>
      </Head>
      <div className="min-h-screen flex flex-col justify-between  dark:bg-darkbackground dark:text-white ">
        <header>
          <Navbar
            logo={
              <span>
                <span className="text-primary-default">w. </span>
                <span>someone</span>
              </span>
            }
            navitems={
              <>
                <NavLink link="/DeveloperPortfolio" text="Home" />
                <NavLink link="/DeveloperPortfolio/About" text="About" />
                <NavLink
                  link="/DeveloperPortfolio/Portfolio"
                  text="Portfolio"
                />
                <NavLink link="/DeveloperPortfolio/Contact" text="Contact" />
              </>
            }
          />
        </header>
        <main className=" flex-1 mt-20">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
