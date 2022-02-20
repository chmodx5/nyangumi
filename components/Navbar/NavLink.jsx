import React from "react";
import Link from "next/link";
import Router from "next/router";

function NavLink({ link, text }) {
  return (
    <Link href={link} passHref>
      <span
        className={`font-semibold uppercase px-4 text-sm  hover:text-primary-default hover:cursor-pointer ${
          Router.pathname == link ? " text-primary-default" : ""
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

export default NavLink;
