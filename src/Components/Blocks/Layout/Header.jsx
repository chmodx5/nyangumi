import React from "react";
import NavDropdownMenu from "./NavDropdownMenu";
import NavLink from "./NavLink";

function Header() {
  return (
    <nav className=" shadow-lg fixed bg-white w-full ">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            {/* page logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="font-bold text-3xl uppercase">
                {" "}
                <span className=" text-primary-default">Nya</span>ngumi
              </h1>
            </div>

            <div className="md:flex items-center hidden ">
              <div className=" flex space-x-2 ">
                <NavLink link="/" text="home" />
                <NavLink link="/about" text="about" />
                <NavLink link="/services" text="services" />
                <NavLink link="/portfolio" text="portfolio" />
                <NavLink link="/contact" text="contact" />

                <NavDropdownMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
