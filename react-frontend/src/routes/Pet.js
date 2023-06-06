/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../components/pages/Title";
import PetDisplay from "../components/pages/PetDisplay";
import PetPageTitle from "../components/pages/PetPageTitle";
import ItemOption from "../components/pages/ItemOption";
import BackgroundOption from "../components/pages/BackgroundOption";
import "../style/pet-page-style.css";

function Pet(props) {
  let user = props.user;

  let petImage = require("../images/" + user.pet.image);
  let petName = user.pet.name;
  const pointBalance = 500;

  let items = [];
  user.pet.items.forEach((item) =>
    items.push({ name: item, image: require("../images/item-" + item + ".png") })
  );

  let backgrounds = [];
  user.pet.backgrounds.forEach((background) =>
    backgrounds.push(require("../images/" + background))
  );

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
            image={petImage}
            name={petName}
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
