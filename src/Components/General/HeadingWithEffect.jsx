import React from "react";

function HeadingWithEffect({ title }) {
  return (
    <div className="inline-block group">
      <h2 className="text-xl uppercase font-bold">{title}</h2>
      <div className="h-1 mt-4 w-3/5 flex gap-x-2">
        <div className="h-full rounded-md bg-primary-default w-1/5 group-hover:w-4/5 transition-all  ease-in-out" />
        <div className="h-full rounded-md bg-primary-default w-4/5 group-hover:w-1/5 transition-all  ease-in-out" />
      </div>
    </div>
  );
}

export default HeadingWithEffect;
