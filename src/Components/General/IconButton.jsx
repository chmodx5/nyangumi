import React from "react";

function IconButton({ link, icon }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}

export default IconButton;
