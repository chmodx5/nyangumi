import React from "react";
import Footer from "../../../../components/Blocks/Layout/Footer";
import Header from "../../../../components/Blocks/Layout/Header";

function MainLayout({ children }) {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <main className="mt-20 flex-1">{children}</main>
      <Footer />
    </main>
  );
}

export default MainLayout;
