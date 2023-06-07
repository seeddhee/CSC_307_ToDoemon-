/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBox from "./SearchBox";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;
function TopNavbar(props) {
  const logo = require("../../images/logo.jpg");
  return (
    <div className="topnav" id="myTopnav">
      <img className="logo-img" src={logo} alt="Taskemon Logo" />
      <SearchBox />
    </div>
  );
}
export default TopNavbar;
