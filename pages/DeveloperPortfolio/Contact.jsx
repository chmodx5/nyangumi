import React from "react";
import DeveloperPortfolioLayout from "../../components/layout/DeveloperPortfolioLayout";
import Breadcrumbs from "../../components/Blocks/Breadcrumbs/Breadcrumbs";
import HeadingWithEffect from "../../components/General/HeadingWithEffect";
import { ImLocation, ImPhone, ImMail, ImWhatsapp } from "react-icons/im";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdPhone, MdLocationPin } from "react-icons/md";

function ContactInfo({ icon, children }) {
  return (
    <div className="flex gap-8 items-center py-2 mb-4">
      <span className="text-3xl">{icon}</span>

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
                <li>0746405792</li>
                <li>0106856867</li>
              </ul>
            </ContactInfo>
            <ContactInfo icon={<MdOutlineEmail />}> </ContactInfo>
            <ContactInfo icon={<ImWhatsapp />}> </ContactInfo>
            <ContactInfo icon={<FaGithub />}> </ContactInfo>
            <ContactInfo icon={<FaLinkedin />}> </ContactInfo>
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
