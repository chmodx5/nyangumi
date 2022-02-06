import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function PortfolioItem({
  category,
  title,
  img,
  link,
  styleOne,
  styleTwo,
  styleThree,
  styleFour,
  styleFive,
  styleSix,
}) {
  const BgImageContainer = ({ img, children }) => {
    return (
      <div className="relative group">
        <div
          className={`aspect-square bg-slate-400  bg-center bg-cover bg-no-repeat group`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
        {children}
      </div>
    );
  };

  const IconLink = ({ link, color }) => {
    return (
      <Link to={link}>
        <div
          className={`${
            color ? color : "bg-gray-900"
          }  h-12 w-12 rounded-full right-7 top-7 flex justify-center items-center opacity-0 group-hover:opacity-100`}
        >
          <GoPlus className="text-white text-2xl" />
        </div>
      </Link>
    );
  };

  if (styleOne) {
    return (
      <BgImageContainer img={img}>
        <div className="mt-4">
          <h5 className="capitalize font-bold text-xl">{title}</h5>
          <p>{category}</p>
        </div>
        <div className="absolute top-5 right-5">
          <IconLink color="bg-primary-default" link={link} />
        </div>
      </BgImageContainer>
    );
  } else if (styleTwo) {
    return (
      <BgImageContainer img={img}>
        <div className="absolute top-0 left-0 w-full h-full bg-primary-default/0 group-hover:bg-primary-default/80 flex flex-col justify-end px-10 pb-14">
          <div className="text-white hidden group-hover:block mb-4">
            <h5 className="capitalize font-bold text-xl">{title}</h5>
            <p>{category}</p>
          </div>
          <div className="">
            <IconLink link={link} />
          </div>
        </div>
      </BgImageContainer>
    );
  } else if (styleThree) {
    return <BgImageContainer img={img}></BgImageContainer>;
  } else if (styleFour) {
    return <BgImageContainer img={img}></BgImageContainer>;
  } else if (styleFive) {
    return <BgImageContainer img={img}></BgImageContainer>;
  } else if (styleSix) {
    return <BgImageContainer img={img}></BgImageContainer>;
  } else {
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
}
