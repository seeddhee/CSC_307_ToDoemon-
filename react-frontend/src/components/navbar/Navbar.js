/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";

function Navbar(props) {
  //default state for active styles.
  const [activeTab, setStateActiveTab] = React.useState("Dashboard");
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {NavbarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.cName} ${activeTab == item.title ? "activeTab" : " "}`}
                  onClick={() => setStateActiveTab(item.title)}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
