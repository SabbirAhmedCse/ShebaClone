import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Pages/MyNavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};

export default Layout;