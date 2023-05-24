import React from "react";
import "../style/login-style.css";
import LeftDiv from "../components/login/LeftDiv.js";
import MyInput from "../components/login/MyInput.js";
import LinkButton from "../components/login/LinkButton";
import PageTitle from "../components/login/PageTitle";

function ForgotPasswordPage() {
  document.title = "Forgot Password";
  const winking_dino = require("../images/winking_dino.png");
  return (
    <div className="login-style">
      <LeftDiv dino={winking_dino} />
      <div className="right-div">
        <PageTitle
          title="FORGOT PASSWORD?"
          subtext="Remember your password? "
          link="Sign in"
          to="/login"
        />
        <p>No worries, we&apos;ll send you reset instructions.</p>

        <MyInput name="Username or Email" type="text" placeholder="productive_dino@gmail.com" />
        <LinkButton location="/login" text="Reset Password" />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
