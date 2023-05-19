import React from "react";
import { Link } from "react-router-dom";
import "../style/login-style.css";

function ForgotPasswordPage() {
  document.title = "Forgot Password";
  const dino = require("../images/winking_dino.png");
  return (
    <div className="signup-page">
      <div className="signup-page-left">
        <img id="dino" src={dino} alt="Winking Dino" />
        <h1>TASKEMON</h1>
      </div>
      <div className="signup-page-right">
        <h2>Forgot Password?</h2>

        <p>
          Remember your password? <Link>Sign in</Link>
          <br />
          <br />
          <br />
          No worries, we&apos;ll send you reset instructions.
          <br />
          <br />
        </p>

        <label htmlFor="username">Username or Email</label>
        <input type="text" id="username" placeholder="productive_dino@gmail.com"></input>

        <Link to="/signup" className="button">
          Reset Password
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
