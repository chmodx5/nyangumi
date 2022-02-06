import React from "react";
import Footer from "../Blocks/Layout/Footer";
import Header from "../Blocks/Layout/Header";

function MainLayout({ children }) {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <main className="mt-20 flex-1 bg-red-400">{children}</main>
      <Footer />
    </main>
  );
}

export default MainLayout;
