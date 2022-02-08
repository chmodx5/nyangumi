import React from "react";

function Header({ logo, navitems }) {
  return (
    <nav className=" shadow-lg fixed bg-white w-full z-50 ">
      <div className="container mx-auto px-2 sm:px-6 md:px-0 ">
        <div className=" h-20 flex items-center justify-center sm:items-stretch sm:justify-between">
          {/* page logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-bold text-3xl uppercase">
              {logo == null ? (
                <>
                  <span className=" text-primary-default">Nya</span>ngumi
                </>
              ) : (
                <>{logo}</>
              )}
            </h1>
          </div>

          <div className="md:flex items-center hidden ">
            <div className=" flex space-x-2 ">{navitems}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
