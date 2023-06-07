/* eslint-disable no-unused-vars */
import React from "react";
import PetDisplay from "../components/pages/PetDisplay";
import "../style/pet-page-style.css";

function Dashboard(props) {
  document.title = "Taskemon | Dashboard";
  let petName = props.user.pet.name;
  let petImage = require("../images/" + props.user.pet.image);
  let background = require("../images/" + props.user.pet.backgrounds[0]);
  return (
    // <div className="dashboard">
    //   <h1 className="title">Dashboard</h1>
    <div className="pet-page">
      <div className="pet-items">
        <div className="pet">
          <PetDisplay
            name={petName}
            image={petImage}
            background={background}
            items={[]}
            visible={[]}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
