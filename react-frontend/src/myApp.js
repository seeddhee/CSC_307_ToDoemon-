import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
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
import axios from "axios";

function MyApp() {
  const userId = "647ecaabc61aa491d93c9cf7";
  const [user, setUser] = useState(getUserById(userId));

  async function getUserById(id) {
    try {
      const response = await axios.get("http://localhost:8000/users/" + id);
      return response.data.Users;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getUserById(userId).then((result) => {
      if (result) setUser(result);
    });
  }, []);

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
              <Navbar /> <Pet user={user} />{" "}
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
