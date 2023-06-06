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
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className={props.className}
          />
          <i
            className={passwordShown ? "far fa-eye" : "far fa-eye-slash"}
            onClick={togglePassword}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="my-input">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={props.className}
        readOnly={props.status}
      />
    </div>
  );
}

export default MyInput;
