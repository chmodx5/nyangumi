import React from "react";
import Link from "next/link";

function Button({ text, link, small, openInNewTab }) {
  return (
    <Link href={link} passHref>
      {openInNewTab ? (
        <a
          className={` ${
            small ? "py-1 px-3 text-md" : "px-6 py-3"
          } inline-block bg-primary-default hover:bg-primary-light  font-semibold uppercase text-white`}
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </Link>
  );
}

export default Button;
