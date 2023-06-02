/* eslint-disable no-unused-vars */
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";

export const NavbarData = [
  {
    title: "Dashboard",
    path: "/",
    icons: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text"
  },
  {
    title: "Virtual Shop",
    path: "/shop",
    icons: <AiIcons.AiOutlineWallet />,
    cName: "nav-text"
  },
  {
    title: "Tasks",
    path: "/tasks",
    icons: <AiIcons.AiOutlineUnorderedList />,
    cName: "nav-text"
  },
  {
    title: "My Pet",
    path: "/pet",
    icons: <TbIcons.TbEggCracked />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    path: "/settings",
    icons: <FiIcons.FiSettings />,
    cName: "nav-text"
  },
  {
    title: "Sign Out",
    path: "/signout",
    icons: <TbIcons.TbLogout />,
    cName: "nav-text"
  }
];
