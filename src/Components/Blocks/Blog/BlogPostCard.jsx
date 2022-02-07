import React from "react";
import Button from "../../General/Button";

export default function BlogPostCard() {
  return (
    <div className="w-full bg-primary-default/5">
      <div className="aspect-video w-full bg-[url('https://source.unsplash.com/random')]"></div>
      <div className="px-6 py-10">
        <div className="flex gap-5">
          <span> 05 May 2022</span>
          <span>/</span>
          <span>E-commerce</span>
        </div>
        <br />
        <h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          voluptatibus?
        </h5>
        <br />
        <Button small link="/" text="read more" />
      </div>
    </div>
  );
}
