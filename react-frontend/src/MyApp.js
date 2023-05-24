import React from "react";
import ErrorPage from "./login-pages/ErrorPage";
import SignUpPage from "./login-pages/SignUpPage";
import ForgotPasswordPage from "./login-pages/ForgotPasswordPage";
import LoginPage from "./login-pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MyApp() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MyApp;
