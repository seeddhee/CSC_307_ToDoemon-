import React from "react";

function PetDisplay(props) {
  return (
    <div className="pet-display">
      <label htmlFor="background-display">{props.name}</label>
      <img id="background-display" alt="Forest" src={props.background} />
      <img src={props.image} alt="My Pet" id={props.name} className="pet-image" />
      <div className="items-wrapper">
        {props.items.map((item) => (
          <img
            key={Math.random()}
            src={item.image}
            className="displayed-item"
            id={item.name}
            style={{ opacity: props.visible.includes(item.name) ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export default PetDisplay;
