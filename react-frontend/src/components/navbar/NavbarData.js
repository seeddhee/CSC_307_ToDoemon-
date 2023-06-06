/* eslint-disable no-unused-vars */
import React from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";

//Notification Alert object with Hardcoded values to represent the categories/names used for the tabs and sub tabs in the nav menu.

//key= category for the alert, value = number of alert.
export const [alertObj, setAlertObj] = React.useState({
  dashboard: 0,
  virtualShop: 3,
  tasks: 6,
  myPet: 20,
  settings: 0
});

//Once the backend data is imported the object will be merged with this list so that new categories populate in the nav bar with their corresponding alert number.
export const NavbarData = [
  {
    title: "Dashboard",
    name: "dashboard",
    path: "/dashboard",
    icons: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text"
  },
  {
    title: "Virtual Shop",
    name: "virtualShop",
    path: "/shop",
    icons: <AiIcons.AiOutlineWallet />,
    cName: "nav-text"
  },
  {
    title: "Tasks",
    name: "tasks",
    path: "/tasks",
    icons: <AiIcons.AiOutlineUnorderedList />,
    cName: "nav-text"
  },
  {
    title: "My Pet",
    name: "myPet",
    path: "/pet",
    icons: <TbIcons.TbEggCracked />,
    cName: "nav-text"
  },
  {
    title: "Settings",
    name: "settings",
    path: "/settings",
    icons: <FiIcons.FiSettings />,
    cName: "nav-text"
  },
  {
    title: "Sign Out",
    name: "signOut",
    path: "/signout",
    icons: <TbIcons.TbLogout />,
    cName: "nav-text"
  }
];
