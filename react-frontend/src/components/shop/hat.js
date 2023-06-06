import React from "react";

function hat(props) {
  return (
    <div className="hat">
      <img className="hat-img" src={props.hat} alt="hat" />
    </div>
  );
}

export default hat;
