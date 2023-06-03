import React from "react";

function PetDisplay(props) {
  return (
    <div className="pet-display">
      <label htmlFor="background-display">{props.name}</label>
      <img id="background-display" alt="Forest" src={props.background} />
      <img src={props.image} alt="My Pet" id={props.name} className="pet-image" />
    </div>
  );
}

export default PetDisplay;
