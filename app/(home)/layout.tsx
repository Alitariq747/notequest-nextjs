import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <hr />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
