import React from "react";
import "../style/login-style.css";
import LeftDiv from "../components/LeftDiv.js";
import MyInput from "../components/MyInput.js";
import LinkButton from "../components/LinkButton";
import PageTitle from "../components/PageTitle";

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
        <LinkButton location="/signup" text="Reset Password" />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
