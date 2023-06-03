import React from "react";

function BackgroundOption(props) {
  return (
    <div className="background-option">
      <img className="background-image" src={props.image} />
      <button className="equip-button" onClick={props.onClick}>
        Select
      </button>
    </div>
  );
}

export default BackgroundOption;
