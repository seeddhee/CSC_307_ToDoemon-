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

  var cowboyHat = {
    name: "cowboy-hat",
    image: require("../images/item-cowboy-hat.png"),
    opacity: 0
  };
  var mustache = { name: "mustache", image: require("../images/item-mustache.png"), opacity: 0 };
  var flower = { name: "flower", image: require("../images/item-flower.png"), opacity: 0 };

  let items = [cowboyHat, mustache, flower];

  const bg1 = require("../images/background-1.png");
  const bg2 = require("../images/background-2.png");
  let backgrounds = [bg1, bg2];

  const [displayedBackground, setDisplayedBackground] = useState(backgrounds[0]);
  const [displayedItems, setDisplayedItems] = useState(items);

  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  function handleClickItems(event) {
    if (event.target.className === "equip-button") {
      displayedItems.filter((item) => {
        if (item.name === event.target.id) {
          item.opacity = 1;
        }
      });
      console.log(displayedItems);
      setDisplayedItems(displayedItems);
      event.target.innerText = "Equipped";
      event.target.className = "equip-button-selected";
    } else {
      displayedItems.filter((item) => {
        if (item.name === event.target.id) {
          item.opacity = 0;
        }
      });
      console.log(displayedItems);
      setDisplayedItems(displayedItems);
      event.target.innerText = "Wear";
      event.target.className = "equip-button";
    }
    reset;
  }

  function handleClickBackgrounds(event) {
    if (event.target.className === "equip-button") {
      setDisplayedBackground(event.target.value);
      event.target.innerText = "Equipped";
      event.target.className = "equip-button-selected";
    } else {
      event.target.innerText = "Select";
      event.target.className = "equip-button";
    }
    reset;
  }

  useEffect(() => {
    setDisplayedItems(displayedItems);
  });

  return (
    <div className="pet-page">
      <Title text="My Pet"></Title>
      <div className="pet-items">
        <div className="pet">
          <PetDisplay
            key={seed}
            background={displayedBackground}
            image={pet}
            name="Jake"
            items={displayedItems}
          />
        </div>
        <div className="items">
          <div className="items-top">
            <h2>Your Points: {pointBalance}</h2>
            <Link to="/shop">Go to shop</Link>
          </div>

          <PetPageTitle text="Accessories" />
          <div className="item-list">
            {items.map((item) => (
              <ItemOption
                id={item.name}
                key={Math.random()}
                image={item.image}
                onClick={handleClickItems}
                text="Wear"
              />
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
