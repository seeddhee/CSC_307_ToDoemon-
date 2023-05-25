import React from "react";

function LeftDiv(props) {
  return (
    <div className="left-div">
      <img className="dino-img" src={props.dino} alt="Happy Dino" />
      <h1 id="app-name">TASKEMON</h1>
    </div>
  );
}

export default LeftDiv;
