/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import MyApp from "./MyApp";
import Shop from "./routes/Shop";
import Tasks from "./routes/Tasks";
import Pet from "./routes/Pet";
import Settings from "./routes/Settings";
import Navbar from "./components/navbar/Navbar";
import "./MyApp.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        //element - is the component page. If changed to MyApp page will process.
        path: "/",
        element: <Dashboard />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "tasks",
        element: <Tasks />
      },
      {
        path: "pet",
        element: <Pet />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        //Will we have a signout page?
        path: "signout",
        element: <Dashboard />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
