/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../components/pages/Title";
import PetDisplay from "../components/pages/PetDisplay";
import PetPageTitle from "../components/pages/PetPageTitle";
import ItemOption from "../components/pages/ItemOption";
import BackgroundOption from "../components/pages/BackgroundOption";
import "../style/pet-page-style.css";

function Pet() {
  const pet = require("../images/pet-dino.png");
  const pointBalance = 500;

  const cowboyHat = require("../images/item-cowboy-hat.png");
  const mustache = require("../images/item-mustache.png");
  const flower = require("../images/item-flower.png");
  let items = [cowboyHat, mustache, flower];

  const bg1 = require("../images/background-1.png");
  const bg2 = require("../images/background-2.png");
  let backgrounds = [bg1, bg2];

  const [displayedBackground, setDisplayedBackground] = useState(backgrounds[0]);

  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  function handleClickItems(event) {
    if (event.target.className === "equip-button") {
      event.target.innerText = "Equipped";
      event.target.className = "equip-button-selected";
    } else {
      event.target.innerText = "Wear";
      event.target.className = "equip-button";
    }
  }

  function handleClickBackgrounds(event) {
    if (event.target.className === "equip-button") {
      setDisplayedBackground(event.target.value);
      console.log(event.target);
      event.target.innerText = "Equipped";
      event.target.className = "equip-button-selected";
      reset;
    } else {
      event.target.innerText = "Select";
      event.target.className = "equip-button";
    }
  }

  return (
    <div className="pet-page">
      <Title text="My Pet"></Title>
      <div className="pet-items">
        <div className="pet">
          <PetDisplay background={displayedBackground} image={pet} name="Jake" />
        </div>
        <div className="items">
          <div className="items-top">
            <h2>Your Points: {pointBalance}</h2>
            <Link to="/shop">Go to shop</Link>
          </div>

          <PetPageTitle text="Accessories" />
          <div className="item-list">
            {items.map((item) => (
              <ItemOption key={Math.random()} image={item} onClick={handleClickItems} text="Wear" />
            ))}
          </div>
          <PetPageTitle text="Environments" />
          <div className="background-list">
            {backgrounds.map((background) => (
              <BackgroundOption key={seed} image={background} onClick={handleClickBackgrounds} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pet;
