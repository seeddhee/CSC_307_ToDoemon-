import React, { useState } from "react";

function MyInput(props) {
  if (props.type == "password") {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
    return (
      <div className="my-input">
        <label htmlFor={props.name}>{props.name}</label>
        <div className="password">
          <input
            type={passwordShown ? "text" : "password"}
            id={props.name}
            placeholder={props.placeholder}></input>
          <i
            className={passwordShown ? "far fa-eye" : "far fa-eye-slash"}
            onClick={togglePassword}></i>
        </div>
      </div>
    );
  }
  return (
    <div className="my-input">
      <label htmlFor={props.name}>{props.name}</label>
      <input type={props.type} id={props.name} placeholder={props.placeholder}></input>
    </div>
  );
}

export default MyInput;
