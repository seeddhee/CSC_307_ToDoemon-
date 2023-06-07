import React from "react";
import { Link } from "react-router-dom";

function LinkButton(props) {
  return (
    <Link to={props.location} className="linkbutton_2" onClick={props.onClick}>
      {props.text}
    </Link>
  );
}

export default LinkButton;
