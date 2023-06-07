import React from "react";

function BackgroundOption(props) {
  const text = props.displayed == props.image ? "Equipped" : "Select";
  const className = props.displayed == props.image ? "equip-button-selected" : "equip-button";

  return (
    <div className="background-option">
      <img className="background-image" src={props.image} alt={props.text} />
      <button className={className} onClick={props.onClick} value={props.image}>
        {text}
      </button>
    </div>
  );
}

export default BackgroundOption;
