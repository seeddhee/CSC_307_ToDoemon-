import { Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import ErrorPage from "./login-pages/ErrorPage";
import Dashboard from "./routes/Dashboard";
import Shop from "./routes/Shop";
import Tasks from "./routes/Tasks";
import Pet from "./routes/Pet";
import Settings from "./routes/Settings";
import LoginPage from "./login-pages/LoginPage";
import Navbar from "./components/navbar/Navbar";
// import SignUpPage from "./login-pages/SignUpPage";
// import ForgotPasswordPage from "./login-pages/ForgotPasswordPage";

function MyApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={
            <Fragment>
              <Navbar /> <Dashboard />{" "}
            </Fragment>
          }
        />
        <Route
          path="shop"
          element={
            <Fragment>
              <Navbar /> <Shop />{" "}
            </Fragment>
          }
        />
        <Route
          path="tasks"
          element={
            <Fragment>
              <Navbar /> <Tasks />{" "}
            </Fragment>
          }
        />
        <Route
          path="pet"
          element={
            <Fragment>
              <Navbar /> <Pet />{" "}
            </Fragment>
          }
        />
        <Route
          path="settings"
          element={
            <Fragment>
              <Navbar /> <Settings />{" "}
            </Fragment>
          }
        />
        <Route path="signout" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default MyApp;
