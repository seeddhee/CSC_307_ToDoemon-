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
  document.title = "Taskemon | My Pet";

  var cowboyHat = {
    name: "cowboy-hat",
    image: require("../images/item-cowboy-hat.png")
  };
  var mustache = { name: "mustache", image: require("../images/item-mustache.png") };
  var flower = { name: "flower", image: require("../images/item-flower.png") };

  let items = [cowboyHat, mustache, flower];

  const bg1 = require("../images/background-1.png");
  const bg2 = require("../images/background-2.png");
  let backgrounds = [bg1, bg2];

  const [displayedBackground, setDisplayedBackground] = useState(backgrounds[0]);
  const [displayedItems, setDisplayedItems] = useState([]);

  function handleClickItems(event) {
    console.log(event.target);
    if (event.target.className === "equip-button") {
      items.forEach((item) => {
        if (item.name == event.target.value) {
          setDisplayedItems([...displayedItems, item.name]);
        }
      });
    } else {
      let newItems = displayedItems.filter((item) => item != event.target.value);
      setDisplayedItems(newItems);
    }
  }

  function handleClickBackgrounds(event) {
    if (event.target.className === "equip-button") {
      setDisplayedBackground(event.target.value);
    }
  }

  return (
    <div className="pet-page">
      <Title text="My Pet"></Title>
      <div className="pet-items">
        <div className="pet">
          <PetDisplay
            key={Math.random()}
            background={displayedBackground}
            image={pet}
            name="Jake"
            items={items}
            visible={displayedItems}
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
                visible={displayedItems}
              />
            ))}
          </div>
          <PetPageTitle text="Environments" />
          <div className="background-list">
            {backgrounds.map((background) => (
              <BackgroundOption
                key={Math.random()}
                image={background}
                onClick={handleClickBackgrounds}
                displayed={displayedBackground}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pet;
