/* eslint-disable no-unused-vars */
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
import SignUpPage from "./login-pages/SignUpPage";
import ForgotPasswordPage from "./login-pages/ForgotPasswordPage";
import Topnav from "./components/navbar/TopNavbar";
import Calendar from "./routes/Calendar";
import { alertObj } from "./components/navbar/NavbarData";

function MyApp() {
  const [alertObjState, setAlertObjectState] = React.useState(alertObj);
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgot" element={<ForgotPasswordPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Dashboard />{" "}
              </div>
            </Fragment>
          }
        />
        <Route
          path="calendar"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Calendar />{" "}
              </div>
            </Fragment>
          }
        />
        <Route
          path="shop"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Shop />{" "}
              </div>
            </Fragment>
          }
        />
        <Route
          path="tasks"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Tasks />{" "}
              </div>
            </Fragment>
          }
        />
        <Route
          path="pet"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Pet />{" "}
              </div>
            </Fragment>
          }
        />
        <Route
          path="settings"
          element={
            <Fragment>
              <Topnav />
              <div className="container">
                <Navbar alertObj={alertObjState} /> <Settings />{" "}
              </div>
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
