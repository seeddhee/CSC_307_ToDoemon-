/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import LeftDiv from "../components/login/LeftDiv.js";
import MyInput from "../components/login/MyInput.js";
import LinkButton from "../components/login/LinkButton.js";
import PageTitle from "../components/login/PageTitle.js";
import ErrorMessage from "../components/login/ErrorMessage.js";
import "../style/login-style.css";

function SignUpPage() {
  document.title = "Signup";
  const [user, setUser] = useState({
    Username: "",
    Email: "",
    Password: "",
    "Confirm Password": ""
  });

  const [classes, setClasses] = useState({
    Username: "",
    Email: "",
    Password: ""
  });

  const [error, setError] = useState("0");

  function handleChange(event) {
    const { id, value } = event.target;
    setUser((values) => ({ ...values, [id]: value }));
    setClasses((values) => ({ ...values, [id]: "" }));
  }

  function signOut() {
    if (validateForm()) {
      console.log(user);
      setUser({ Username: "", Email: "", Password: "", "Confirm Password": "" });
    }
  }

  function validateForm() {
    let a = validateEmail(user.Email);
    let b = validateUsername(user.Username);
    let c = validatePassword(user.Password, user["Confirm Password"]);
    if (a && b && c) {
      setError("0");
      return true;
    }
    return false;
  }

  function validateEmail(email) {
    /*eslint-disable no-useless-escape */
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)) {
      return true;
    }
    setClasses((values) => ({ ...values, Email: "error" }));
    setError("1");
    return false;
  }

  function validateUsername(username) {
    if (username === "") {
      setClasses((values) => ({ ...values, Username: "error" }));
      setError("1");
      return false;
    }
    return true;
  }

  function validatePassword(password, confirmPassword) {
    if (password != "" && password === confirmPassword) {
      return true;
    }
    setClasses((values) => ({ ...values, Password: "error" }));
    setError("1");
    return false;
  }

  useEffect(() => {
    setUser(user);
    setClasses(classes);
    setError(error);
  });

  const happy_dino = require("../images/happy_dino.png");
  return (
    <div className="login-style">
      <LeftDiv dino={happy_dino} />
      <div className="right-div">
        <PageTitle title="WELCOME!" subtext="Have an account? " link="Sign In" to="/login" />
        <ErrorMessage text="Oops, something wasn't right" display={{ opacity: error }} />
        <MyInput
          name="Email"
          type="text"
          placeholder="productivedino@gmail.com"
          value={user.Email}
          onChange={handleChange}
          className={classes.Email}
        />
        <MyInput
          name="Username"
          type="text"
          placeholder="productivedino"
          value={user.Username}
          onChange={handleChange}
          className={classes.Username}
        />
        <MyInput
          name="Password"
          type="password"
          placeholder="●●●●●●●●●"
          value={user.Password}
          onChange={handleChange}
          className={classes.Password}
        />
        <MyInput
          name="Confirm Password"
          type="password"
          placeholder="●●●●●●●●●"
          value={user["Confirm Password"]}
          onChange={handleChange}
          className={classes.Password}
        />

        <LinkButton location="/signup" text="Sign Up" onClick={signOut} />
      </div>
    </div>
  );
}

export default SignUpPage;
