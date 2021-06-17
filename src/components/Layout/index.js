import React, { useState } from "react";

import Head from "next/head";
import Navbar from "../Navbar";
import Dropdown from "../Dropdown";

const Layout = ({ title, menuItems, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-20">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
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
    </div>
  );
};

export default Layout;
