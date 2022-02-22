import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import Breadcrumbs from "../../components/Blocks/Breadcrumbs/Breadcrumbs";
import HeadingWithEffect from "../../components/General/HeadingWithEffect";
import { ImLocation, ImPhone, ImMail, ImWhatsapp } from "react-icons/im";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdPhone, MdLocationPin } from "react-icons/md";

function ContactInfo({ icon, children }) {
  return (
    <div className="flex gap-8 items-center py-2 mb-4 group">
      <span className="text-3xl group-hover:text-primary-default">{icon}</span>

      <div>{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <Breadcrumbs title="contact me" />
      <section>
        <div className="mycontainer py-20 grid grid-cols-12 ">
          <div className="col-span-4 text-white bg-darkbackground px-6 py-10">
            <HeadingWithEffect title="contact info" />
            <br />
            <ContactInfo icon={<ImLocation />}>
              <p>Juja, kenya</p>
            </ContactInfo>
            <ContactInfo icon={<MdPhone />}>
              <ul>
                <li className="hover:text-primary-default">
                  <a href="tel:0746405792">0746405792</a>
                </li>
                <li className="hover:text-primary-default">
                  <a href="tel:0106856867">0106856867</a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<MdOutlineEmail />}>
              <ul>
                <li>
                  <a
                    className="hover:text-primary-default"
                    href="mailto:onesmaswanjala2021@gmail.com"
                  >
                    <p>onesmaswanjala2021@gmail.com</p>
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary-default"
                    href="mailto:wafulawanjala@hotmail.com"
                  >
                    <p>wafulawanjala@hotmail.com</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<ImWhatsapp />}>
              <ul>
                <li>
                  <a
                    className="hover:text-primary-default"
                    href="https://api.whatsapp.com/send?phone=+254746405792"
                  >
                    <p>0746405792</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<FaGithub />}>
              <ul>
                <li>
                  <a
                    className="hover:text-primary-default"
                    href="https://github.com/chmodx5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>@chmodx5</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<FaLinkedin />}>
              <ul>
                <li>
                  <a
                    className="hover:text-primary-default"
                    href="https://www.linkedin.com/in/onesmas-wanjala-10127b216/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>onesmas wanjala</p>
                  </a>
                </li>
              </ul>
            </ContactInfo>
          </div>
          <div className="col-span-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            amet at repellendus tempore illum rem facilis non eligendi
            blanditiis similique repellat, et veritatis. Aperiam distinctio quod
            ex voluptates nostrum laborum.
          </div>
        </div>
      </section>
    </div>
  );
}
Contact.getLayout = function getLayout(page) {
  return <DeveloperPortfolioLayout>{page}</DeveloperPortfolioLayout>;
};
