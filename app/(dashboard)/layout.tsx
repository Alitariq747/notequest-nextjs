import React from "react";

import ProtectedNavbar from "@/components/NavbarWithSearch";
import Footer from "@/components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProtectedNavbar />
      <hr />
      {children}
    </>
  );
}

export default Layout;
