import React from "react";
import { Link } from "react-router-dom";

function PageTitle(props) {
  return (
    <div className="page-title">
      <h2>{props.title}</h2>
      <p>
        {props.subtext}
        <Link to={props.to}>{props.link}</Link>
      </p>
    </div>
  );
}

export default PageTitle;
