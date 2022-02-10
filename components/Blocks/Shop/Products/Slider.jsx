import React from "react";

export default function Slider({ val, fixedval }) {
  function getwidth() {
    return (val / fixedval) * 100 + "%";
  }
  const mwwidth = getwidth(val, fixedval);

  return (
    <div className="h-1 bg-gray-300">
      <div
        className="h-full bg-primary-default"
        style={{ width: getwidth() }}
      ></div>
    </div>
  );
}
