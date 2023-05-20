import React from "react";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MyApp() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MyApp;
