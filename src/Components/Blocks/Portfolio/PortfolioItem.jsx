import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function PortfolioItem({ category, title, img, link }) {
  return (
    <div
      className={`aspect-square bg-slate-400  bg-center bg-cover bg-no-repeat relative group`}
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className=" absolute w-full h-full bg-gradient-to-b from-primary-default to-primary-light opacity-0 group-hover:opacity-80"></div>
      <Link to={link}>
        <div className="absolute w-12 h-12 rounded-full bg-gray-900 right-7 top-7 flex justify-center items-center opacity-0 group-hover:opacity-100">
          <GoPlus className="text-white text-2xl" />
        </div>
      </Link>
      <div className="absolute w-full bottom-0 left-0 text-white p-8 hidden group-hover:block">
        <h5 className=" capitalize font-semibold">{category}</h5>
        <h4 className="font-bold text-2xl">{title}</h4>
      </div>
    </div>
  );
}
