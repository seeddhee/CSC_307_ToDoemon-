import React from "react";

function ErrorMessage(props) {
  return (
    <div className="error-message">
      <p style={props.display}>{props.text}</p>
    </div>
  );
}
export default ErrorMessage;
