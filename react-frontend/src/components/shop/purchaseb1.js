import React from "react";

function bracelet(props) {
  return (
    <div className="bracelet">
      <img className="bracelet-img" src={props.bracelet} alt="bracelet" />
    </div>
  );
}