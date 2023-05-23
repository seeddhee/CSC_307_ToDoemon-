import React from "react";
import { Link } from "react-router-dom";
import LeftDiv from "../components/LeftDiv.js";
import MyInput from "../components/MyInput.js";
import LinkButton from "../components/LinkButton.js";
import PageTitle from "../components/PageTitle.js";
import "../style/login-style.css";

function LoginPage() {
  document.title = "Login";
  const happy_dino = require("../images/happy_dino.png");
  return (
    <div className="login-style">
      <LeftDiv dino={happy_dino} />
      <div className="right-div">
        <PageTitle
          title="WELCOME BACK!"
          subtext="Don't have an account? "
          link="Sign Up"
          to="/signup"
        />
        <MyInput name="Username or Email" type="text" placeholder="productive_dino@gmail.com" />
        <MyInput name="Password" type="password" placeholder="●●●●●●●●●" />

        <div className="remember-forgot">
          <div className="remember">
            <div className="round">
              <input type="checkbox" id="checkbox"></input>
              <label htmlFor="checkbox"></label>
            </div>

            <label htmlFor="remember-button">Remember me</label>
          </div>
          <Link to="/forgot">Forgot Password?</Link>
        </div>

        <LinkButton location="/forgot" text="Sign In" />
      </div>
    </div>
  );
}

export default LoginPage;
