import React, { useState } from "react";

import Head from "next/head";
import Navbar from "../Navbar";
import Dropdown from "../Dropdown";

const Layout = ({ title, menuItems, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
     window.scrollTo(0, 0);
     setIsOpen(!isOpen);
  };

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
        onClickHandler={onClickHandler}
        isOpen={isOpen}
      />
      <Dropdown data={menuItems} isOpen={isOpen} onClickHandler={onClickHandler} />
      {children}
    </>
  );
};

export default Layout;
