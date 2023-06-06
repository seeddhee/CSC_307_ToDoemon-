import React from "react";

function mustache(props) {
  return (
    <div className="mustache">
      <img className="mustache-img" src={props.mustache} alt="mustache" />
    </div>
  );
}

export default mustache;
