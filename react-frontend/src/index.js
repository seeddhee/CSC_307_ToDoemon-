import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import MyApp from "./myApp";
// import Dashboard from "./routes/Dashboard";
// import Shop from "./routes/Shop";
// import Tasks from "./routes/Tasks";
// import Pet from "./routes/Pet";
// import Settings from "./routes/Settings";
// import Navbar from "./components/navbar/Navbar";
// import ErrorPage from "./login-pages/ErrorPage";
// import SignUpPage from "./login-pages/SignUpPage";
// import ForgotPasswordPage from "./login-pages/ForgotPasswordPage";
// import LoginPage from "./login-pages/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </React.StrictMode>
);
