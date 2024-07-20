import React from "react";
import Header from "./Header";
import Footer from "./Footer";


function Layout({ children }) {
  return (
    <div className=" flex flex-col justify-between h-screen pt-28 ">

     <div >
        <Header />
        <main className="  ">{children}</main>
      </div>
        <Footer/>
    </div>
  );
}
export default Layout;