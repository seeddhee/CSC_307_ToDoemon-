/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../components/pages/Title.js";
import MyInput from "../components/pages/MyInputSettings.js";
import LinkButton from "../components/pages/LinkButtonSettings.js";
import "../style/settings-style.css";

function Settings() {
  const [status, setStatus] = useState(true);

  function handleEdit() {
    setStatus(false);
  }
  function handleCancel() {
    setStatus(true);
  }
  function handleSave() {
    setStatus(true);
  }
  return (
    <div className="settings-page">
      <Title text="Edit profile" />
      <div className="settings-inputs">
        <MyInput
          name="Email"
          type="text"
          placeholder="productivedino@gmail.com"
          status={status}
          value="Productive_Dino@gmail.com"
        />
        <MyInput
          name="Username"
          type="text"
          placeholder="productivedino"
          status={status}
          value="Productive_Dino"
        />
      </div>
      <div className="settings-buttons">
        <LinkButton text="Cancel" status={status} onClick={handleCancel} />
        <LinkButton text="Save" status={status} onClick={handleSave} />
        <LinkButton text="Edit" status={!status} onClick={handleEdit} />
      </div>
    </div>
  );
}

export default Settings;
