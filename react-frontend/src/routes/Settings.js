/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../components/pages/Title.js";
import MyInput from "../components/pages/MyInputSettings.js";
import LinkButton from "../components/pages/LinkButtonSettings.js";
import "../style/settings-style.css";

function Settings(props) {
  const [status, setStatus] = useState(true);
  const checkmark = require("../images/checkmark.png");
  document.title = "Taskemon | Settings";

  const [user, setUser] = useState({
    Username: props.user.username,
    Email: props.user.email
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setUser((values) => ({ ...values, [id]: value }));
  }

  function handleEdit() {
    setStatus(false);
  }

  function handleCancel() {
    setUser({
      Username: props.user.username,
      Email: props.user.email
    });
    setStatus(true);
  }

  function handleSave() {
    let response = props.updateUser(user.Username, user.Email);
    if (response === 200) {
      setUser(user);
    }
    setStatus(true);
  }

  return (
    <div className="settings-page">
      <Title text="Edit profile" />
      <div className="settings-inputs">
        <div className="input-checkmark">
          <img
            src={checkmark}
            className="checkmark-img"
            style={{ display: status ? "block" : "none" }}
          />
          <MyInput
            name="Email"
            type="text"
            placeholder="productivedino@gmail.com"
            status={status}
            value={user.Email}
            onChange={handleChange}
          />
        </div>
        <div className="input-checkmark">
          <img
            src={checkmark}
            className="checkmark-img"
            style={{ display: status ? "block" : "none" }}
          />
          <MyInput
            name="Username"
            type="text"
            placeholder="productivedino"
            status={status}
            value={user.Username}
            onChange={handleChange}
          />
        </div>
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
