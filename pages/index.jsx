import MainLayout from "../components/layout/MainLayout";
import Hero from "./../components/Blocks/Hero/Hero";
import Image from "next/image";
import Button from "../components/General/Button";

export default function Home() {
  const pages = [
    {
      img: "https://source.unsplash.com/4OyLq2yN9u0",
      title: "shop",
      link: "Shop",
    },
    {
      img: "https://source.unsplash.com/4OyLq2yN9u0",
      title: "developer portfolio",
      link: "/DeveloperPorfolio",
    },
    {
      img: "https://source.unsplash.com/4OyLq2yN9u0",
      title: "blog",
      link: "/Blog",
    },
  ];
  return (
    <>
      <Hero
        title="nyangumi"
        subtitle="a stunning web template"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate "
        buttonlink="/"
        buttontext="discover more"
      />
      <section className="py-20">
        <h2 className=" text-center text-4xl font-bold mb-10">
          {pages.length}
          <span className="text-primary-default"> Unique </span>
          Demo Home Pages
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:cols-3 gap-6">
          {pages.map((page, index) => (
            <div key={index} className=" w-full shadow-md hover:shadow-xl">
              <div className="bg-blue-300 aspect-w-1 aspect-h-1">
                <Image
                  src={page.img}
                  alt={page.title}
                  className="w-full h-full object-center object-cover "
                  layout="fill"
                  priority
                />
              </div>
              <div className="flex justify-between items-center px-3 bg-primary-default/5 py-6">
                <h4 className=" font-bold uppercase">{page.title}</h4>
                <Button link={page.link} small openInNewTab text="preview" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
