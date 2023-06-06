import React from "react";

function PetPageTitle(props) {
  return (
    <div className="pet-page-title">
      <h3>{props.text}</h3>
    </div>
  );
}

export default PetPageTitle;
