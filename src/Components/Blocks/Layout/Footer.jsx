import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {
  FaPinterestP,
  FaGithubAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import IconButton from "../../General/IconButton";
import HeadingWithEffect from "../../General/HeadingWithEffect";

function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-4">
              <h1 className=" uppercase text-2xl font-bold mb-8">
                <span className=" text-primary-default">nya</span>ngumi
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                excepturi saepe incidunt. Eveniet vel assumenda distinctio
                recusandae vero! Possimus deserunt dolor ut. Quisquam nobis nam
                aperiam id placeat possimus aliquam?
              </p>
              <div className="flex gap-5 mt-12">
                <IconButton icon={<BsInstagram />} />
                <IconButton icon={<BsTwitter />} />
                <IconButton icon={<FaPinterestP />} />
                <IconButton icon={<FaGithubAlt />} />
              </div>
            </div>
            <div className="col-span-3">
              <HeadingWithEffect title="contact us" />
              <div>
                <ul>
                  <li>
                    <GrMapLocation />
                    <p>374 FA Tower, William S Blvd 2721, IL, USA</p>
                  </li>
                  <li>
                    <FaPhoneAlt />
                    <p>(+880)155 69569 365</p>
                  </li>
                  <li>
                    <FaRegEnvelope />
                    <p>support@rstheme.com</p>
                  </li>
                  <li>
                    <AiOutlineFieldTime />
                    <p>Opening Hours: 10:00 - 18:00</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-5">
              <HeadingWithEffect title="contact us" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique reiciendis asperiores
              </p>
              <form action="">
                <input type="email" name="" id="" />
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              © 2021 Dabble Inc. All Rights Reserved.
            </div>
            <div className="col-span-8 flex justify-end">
              <div className="flex gap-x-5">
                {/* to finish the styling of this links in the css file */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
