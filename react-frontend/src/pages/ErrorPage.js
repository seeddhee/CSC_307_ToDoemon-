import React from "react";
import "../style/login-style.css";
import LinkButton from "../components/LinkButton";

function ErrorPage() {
  document.title = "404";
  const ghost = require("../images/ghost_dino.png");
  return (
    <div className="login-style">
      <div className="error-page">
        <h2>404</h2>
        <img src={ghost} alt="Ghost Dino" className="dino-img" />
        <p>
          Page not found. <br />
          There is nothing to see here
        </p>
        <LinkButton text="Go to Dashboard" location="/forgot" />
      </div>
    </div>
  );
}

export default ErrorPage;
