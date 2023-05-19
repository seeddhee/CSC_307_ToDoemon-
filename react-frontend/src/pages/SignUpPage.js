import React from "react";
import { Link } from "react-router-dom";
import "../style/login-style.css";

function SignUpPage() {
  document.title = "Signup";
  const dino = require("../images/happy_dino.png");
  return (
    <div className="signup-page">
      <div className="signup-page-left">
        <img id="dino" src={dino} alt="Happy Dino" />
        <h1>TASKEMON</h1>
      </div>
      <div className="signup-page-right">
        <h2>WELCOME!</h2>
        <p>
          Have an account? <Link>Sign in</Link>
        </p>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="productivedino"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="●●●●●●●●●"></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="●●●●●●●●●"></input>

        <Link to="/forgot" className="button">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
