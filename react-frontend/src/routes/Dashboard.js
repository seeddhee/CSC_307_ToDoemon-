/* eslint-disable no-unused-vars */
import React from "react";
import PetDisplay from "../components/pages/PetDisplay";
import "../style/dashboard-style.css";
import Tasks from "./Tasks";

function Dashboard(props) {
  document.title = "Taskemon | Dashboard";
  let petName = props.user.pet.name;
  let petImage = require("../images/" + props.user.pet.image);
  let background = require("../images/" + props.user.pet.backgrounds[0]);
  return (
    <div className="dashboard">
      <div className="wrapper-title-pet">
        <h1 className="title">Welcome user</h1>
        <PetDisplay
          name={petName}
          image={petImage}
          background={background}
          items={[]}
          visible={[]}
        />
      </div>
      <div className="wrapper-tasks">
        <h3>Todays Tasks</h3>
        <Tasks />
      </div>
    </div>
  );
}

export default Dashboard;
