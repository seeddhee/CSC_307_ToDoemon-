/* eslint-disable no-unused-vars */
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Virtual Shop",
    path: "/shop",
    icons: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Tasks",
    path: "/tasks",
    icons: <FaIcons.FaPencilAlt />,
    cName: "nav-text"
  },
  {
    title: "My Pet",
    path: "/pet",
    icons: <FaIcons.FaHeart />,
    // icons: <FaIcons.FaBone />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    path: "/settings",
    icons: <AiIcons.AiOutlineSetting />,
    cName: "nav-text"
  },
  {
    title: "Sign Out",
    path: "/signout",
    icons: <AiIcons.AiOutlineArrowRight />,
    cName: "nav-text"
  }
];
