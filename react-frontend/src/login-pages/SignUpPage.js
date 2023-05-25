import React from "react";
import LeftDiv from "../components/login/LeftDiv.js";
import MyInput from "../components/login/MyInput.js";
import LinkButton from "../components/login/LinkButton.js";
import PageTitle from "../components/login/PageTitle.js";
import "../style/login-style.css";

function SignUpPage() {
  document.title = "Signup";
  const happy_dino = require("../images/happy_dino.png");
  return (
    <div className="login-style">
      <LeftDiv dino={happy_dino} />
      <div className="right-div">
        <PageTitle title="WELCOME!" subtext="Have an account? " link="Sign In" to="/login" />

        <MyInput name="Email" type="text" placeholder="productivedino@gmail.com" />
        <MyInput name="Username" type="text" placeholder="productivedino" />
        <MyInput name="Password" type="password" placeholder="●●●●●●●●●" />
        <MyInput name="Confirm Password" type="password" placeholder="●●●●●●●●●" />

        <LinkButton location="/dashboard" text="Sign Up" />
      </div>
    </div>
  );
}

export default SignUpPage;
