import React from "react";

function pet(props) {
  return (
    <div className="pet">
      <img className="pet-img" src={props.pet} alt="pet" />
    </div>
  );
}

export default pet;
