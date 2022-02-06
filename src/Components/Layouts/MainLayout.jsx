import React from "react";
import Footer from "../Blocks/Layout/Footer";
import Header from "../Blocks/Layout/Header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
