import React from "react";
import { Link } from "react-router-dom";
import "../style/error.css";
import LinkButton from "../components/LinkButton";

function ErrorPage() {
  document.title = "404";
  const ghost = require("../images/ghost_dino.png");
  return (
    <div className="error-page">
      <h1>404</h1>
      <img src={ghost} alt="Ghost Dino" className="dino-img" />
      <p>
        Page not found. <br />
        There is nothing to see here
      </p>
      <Link to="/forgot" className="button">
        Go to Dashboard
      </Link>
      <LinkButton text="Go to Dashboard" to="/forgot" />
    </div>
  );
}

export default ErrorPage;
