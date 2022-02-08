import React from "react";
import Footer from "./../Footer/Footer";
import Header from "../Header/Header";

function MainLayout({ children }) {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      some layout here
      <main className="mt-20 flex-1">{children}</main>
      <Footer />
    </main>
  );
}

export default MainLayout;
