import React from "react";
import Button from "../../General/Button";

export default function Hero() {
  return (
    <div className="h-auto md:h-screen  bg-[url('https:source.unsplash.com/random')] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="bg-gray-900/80  w-full h-full">
        <div className="container mx-auto grid grid-cols-12 h-full w-full">
          <div className=" col-span-12 md:col-span-7 flex items-center h-full w-full">
            <div className="text-white w-full">
              <div>
                <div className="flex ml-2 gap-2 mb-4 ">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div className="h-5 w-4 -skew-x-[30deg] bg-primary-default"></div>
                  ))}
                </div>
              </div>
              <p className="font-bold mb-6">Hello I'm</p>
              <h1 className="font-bold text-6xl mb-3 text-primary-default">
                Someone Else
              </h1>
              <h1 className="font-bold text-5xl mb-10">Expert Web Developer</h1>
              <h5 className="font-bold text-xl mb-14">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                deserunt illo asperiores tempora, dolor repellendus repellat
                perferendis suscipit ab hic ut voluptatum accusantium provident
                assumenda autem.
              </h5>
              <Button link="/" text="discover more" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 p-16 md:p-0 flex items-center h-full w-full">
            <div
              className="aspect-square bg-[url('https://source.unsplash.com/random')] bg-slate-600 w-full rounded-full
            relative"
            >
              <div className="bg-primary-default/60  h-24 w-24 rounded-full absolute md:top-20 md:right-0 -top-5 left-[15%] md:left-[85%]"></div>
              <div className=" h-24 w-24 rounded-full absolute top-3 right-[15%] md:top-[70%] md:left-0 overflow-hidden flex gap-1 rotate-45">
                {Array.from({ length: 13 }, (_, i) => (
                  <div className="h-full w-1 bg-primary-default"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
