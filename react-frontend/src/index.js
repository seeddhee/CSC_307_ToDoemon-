/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Shop from "./routes/Shop";
import Tasks from "./routes/Tasks";
import Pet from "./routes/Pet";
import Settings from "./routes/Settings";
import Purchase_hat from "./routes/Purchase_hat";
import Purchase_must from "./routes/Purchase_must";
import Purchase_brace from "./routes/Purchase_brace";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./login-pages/ErrorPage";
import SignUpPage from "./login-pages/SignUpPage";
import ForgotPasswordPage from "./login-pages/ForgotPasswordPage";
import LoginPage from "./login-pages/LoginPage";
import "./index.css";
import MyApp from "./myApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        //element - is the component page. If changed to MyApp page will process.
        path: "/",
        element: (
          <Fragment>
            <Navbar /> <Dashboard />{" "}
          </Fragment>
        )
      },
      {
        path: "dashboard",
        element: (
          <Fragment>
            <Navbar /> <Dashboard />{" "}
          </Fragment>
        )
      },
      {
        path: "shop",
        element: (
          <Fragment>
            <Navbar /> <Shop />{" "}
          </Fragment>
        )
      },
      {
        path: "tasks",
        element: (
          <Fragment>
            <Navbar /> <Tasks />{" "}
          </Fragment>
        )
      },
      {
        path: "pet",
        element: (
          <Fragment>
            <Navbar /> <Pet />{" "}
          </Fragment>
        )
      },
      {
        path: "settings",
        element: (
          <Fragment>
            <Navbar /> <Settings />{" "}
          </Fragment>
        )
      },
      {
        //Will we have a signout page?
        path: "signout",
        element: <LoginPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "signup",
        element: <SignUpPage />
      },
      {
        path: "forgot",
        element: <ForgotPasswordPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/purchasehat",
        element: (
          <Fragment>
            <Navbar /> <Purchase_hat />{" "}
          </Fragment>
        )
      },
      {
        path: "/purchasemust",
        element: (
          <Fragment>
            <Navbar /> <Purchase_must />{" "}
          </Fragment>
        )
      },

      {
        path: "/purchasebrac",
        element: (
          <Fragment>
            <Navbar /> <Purchase_brace />{" "}
          </Fragment>
        )
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
