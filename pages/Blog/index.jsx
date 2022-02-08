import React from "react";
import BlogLayout from "./../../components/layout/BlogLayout";

export default function Home() {
  Home.layout = "BlogLayout";
  return (
    <div>
      <h1 className="text-8xl font-bold">blog home</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <BlogLayout>{page}</BlogLayout>;
};
