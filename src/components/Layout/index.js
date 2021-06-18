import React, { useState, useEffect } from "react";

import { getMenuItems } from "@/lib/api";
import Head from "next/head";
import Navbar from "../Navbar";
import Dropdown from "../Dropdown";

const Layout = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const promise = getMenuItems();
    return promise.then((response) => {
      setMenuItems(response.planets);
    });
  }, []);

  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Head>
        <title>The planet - {title || `platform for the universe`}</title>
        <meta name="description" content="planet information platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        data={menuItems}
        onClickHandler={() => {
          window.scrollTo(0, 0);
          setIsOpen(!isOpen);
        }}
        isOpen={isOpen}
      />
      <Dropdown data={menuItems} isOpen={isOpen} />
      {children}
    </>
  );
};

export default Layout;
