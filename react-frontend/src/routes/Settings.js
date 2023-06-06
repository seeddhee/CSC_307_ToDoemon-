/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../components/pages/Title.js";
import MyInput from "../components/login/MyInput.js";
import LinkButton from "../components/login/LinkButton.js";
import "../style/settings-style.css";

function Settings() {
  document.title = "Taskemon | Settings";
  return (
    <div className="settings-page">
      <Title text="Edit profile" />
      <div className="settings-inputs">
        <MyInput name="Email" type="text" placeholder="productivedino@gmail.com" />
        <MyInput name="Username" type="text" placeholder="productivedino" />
        <MyInput name="Password" type="password" placeholder="●●●●●●●●●" />
      </div>
      <div className="settings-buttons">
        <LinkButton text="Cancel" />
        <LinkButton text="Save" />
      </div>
    </div>
  );
}

export default Settings;
