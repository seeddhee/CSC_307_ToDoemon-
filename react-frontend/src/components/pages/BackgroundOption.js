import React from "react";

function BackgroundOption(props) {
  return (
    <div className="background-option">
      <img className="background-image" src={props.image} alt={props.text} />
      <button className="equip-button" onClick={props.onClick} value={props.image}>
        Select
      </button>
    </div>
  );
}

export default BackgroundOption;
