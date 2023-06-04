import React from "react";

function PetDisplay(props) {
  console.log("Reloaded Here");
  return (
    <div className="pet-display">
      <label htmlFor="background-display">{props.name}</label>
      <img id="background-display" alt="Forest" src={props.background} />
      <img src={props.image} alt="My Pet" id={props.name} className="pet-image" />
      <div className="items.wrapper">
        {props.items.map((item) => (
          <img
            key={Math.random()}
            src={item.image}
            className="displayed-item"
            style={{ opacity: item.opacity }}
          />
        ))}
      </div>
    </div>
  );
}

export default PetDisplay;
