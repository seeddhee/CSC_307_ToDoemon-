import React from "react";

function must(props) {
  return (
    <div className="must_p">
      <img className="must-img" src={props.mustpurchased} alt="must" />
    </div>
  );
}

export default must;
