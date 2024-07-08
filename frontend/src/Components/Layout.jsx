import React from "react";
import Header from "./Header";
import Footer from "./Footer";


function Layout({ children }) {
  return (
    <>
        <Header />

     <div className=" flex flex-col justify-between h-screen pt-28 ">
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  );
}
export default Layout;