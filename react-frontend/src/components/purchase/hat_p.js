import React from "react";

function hat(props) {
  return (
    <div className="hat_p">
      <img className="hat-img" src={props.hatpurchased} alt="hat" />
    </div>
  );
}

export default hat;
