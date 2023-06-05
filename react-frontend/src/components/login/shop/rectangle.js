import React from "react";

function rec(props) {
  return (
    <div className="rec">
      <img className="rec-img" src={props.rec} alt="rectangle" />
    </div>
  );
}

export default rec;
