import React from "react";
import { Link } from "react-router-dom";

function Button({ text, link }) {
  return (
    <Link
      to={link}
      className="px-6 py-3 inline-block bg-primary-default hover:bg-primary-light"
    >
      <span className=" font-semibold uppercase text-white">{text}</span>
    </Link>
  );
}

export default Button;
