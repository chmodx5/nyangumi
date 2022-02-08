import React from "react";
import { Link } from "react-router-dom";

function Button({ text, link, small }) {
  return (
    <Link
      to={link}
      className={` ${
        small ? "py-1 px-3 text-md" : "px-6 py-3"
      } inline-block bg-primary-default hover:bg-primary-light  font-semibold uppercase text-white`}
    >
      <span className=" ">{text}</span>
    </Link>
  );
}

export default Button;
