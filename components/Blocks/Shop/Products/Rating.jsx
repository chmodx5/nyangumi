import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

function Rating({ rating, numReviews }) {
  return (
    <div className="flex items-center">
      {rating >= 1 ? (
        <ImStarFull className=" text-secondary-default text-xs" />
      ) : rating >= 0.5 ? (
        <ImStarHalf className=" text-secondary-default text-xs" />
      ) : (
        <ImStarEmpty className=" text-secondary-default text-xs" />
      )}
      {rating >= 2 ? (
        <ImStarFull className=" text-secondary-default text-xs" />
      ) : rating >= 1.5 ? (
        <ImStarHalf className=" text-secondary-default text-xs" />
      ) : (
        <ImStarEmpty className=" text-secondary-default text-xs" />
      )}
      {rating >= 3 ? (
        <ImStarFull className=" text-secondary-default text-xs" />
      ) : rating >= 2.5 ? (
        <ImStarHalf />
      ) : (
        <ImStarEmpty className=" text-secondary-default text-xs" />
      )}
      {rating >= 4 ? (
        <ImStarFull className=" text-secondary-default text-xs" />
      ) : rating >= 3.5 ? (
        <ImStarHalf className=" text-secondary-default text-xs" />
      ) : (
        <ImStarEmpty className=" text-secondary-default text-xs" />
      )}
      {rating >= 5 ? (
        <ImStarFull className=" text-secondary-default text-xs" />
      ) : rating >= 4.5 ? (
        <ImStarHalf className=" text-secondary-default text-xs" />
      ) : (
        <ImStarEmpty className=" text-secondary-default text-xs" />
      )}

      <small className=" ml-4 text-xs">{numReviews} Reviews</small>
    </div>
  );
}

export default Rating;
