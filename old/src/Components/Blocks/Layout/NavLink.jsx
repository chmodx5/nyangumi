import React from "react";
import { Link } from "react-router-dom";

function NavLink({ link, text }) {
  return (
    <Link
      to={link}
      className=" font-semibold uppercase px-4 text-sm  hover:text-primary-default"
    >
      <span>{text}</span>
    </Link>
  );
}

export default NavLink;
