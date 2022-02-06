import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import Button from "../../General/Button";
import AboutSlider from "./AboutSlider";

export default function AboutBlockWithSliders() {
  return (
    <div className="py-20 px-6 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6">
            <HeadingWithEffect
              large
              title="I’m a Passionate Expert Web Developer From USA"
              subtitle="about me"
            />
            <br /> <br />
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              quaerat libero officia quia nostrum, magnam quis tempore amet, ex
              ea adipisci cum facilis atque quibusdam. Alias mollitia quidem
              laboriosam quibusdam?
            </div>
            <br />
            <br />
            <Button link="/" text="donwload cv" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <AboutSlider title="UI/UX Design" progress={90} />
            <AboutSlider title="Branding" progress={50} />
            <AboutSlider title="E-commerce" progress={80} />
            <AboutSlider title="Web Developement" progress={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
