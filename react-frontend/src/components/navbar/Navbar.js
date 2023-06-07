/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import { IconContext } from "react-icons";
const LOW_ALERT_NUM = 3;
const MED_ALERT_NUM = 6;

function Navbar(props) {
  //default state for active styles.
  const [activeTab, setStateActiveTab] = React.useState("Dashboard");
  const setAlertClass = (alertNumber) => {
    if (alertNumber <= LOW_ALERT_NUM) {
      return "alert-low";
    } else if (alertNumber <= MED_ALERT_NUM) {
      return "alert-med";
    } else {
      return "alert-high";
    }
  };
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
                    <div className="nav-item">
                      {item.icons}
                      <span>{item.title}</span>
                    </div>
                    {props.alertObj[item.name] > 0 ? (
                      <div className={setAlertClass(props.alertObj[item.name])}>
                        {props.alertObj[item.name]}
                      </div>
                    ) : (
                      <></>
                    )}
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
