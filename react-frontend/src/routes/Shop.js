/* eslint-disable no-unused-vars */
import React from "react";
import Dino from "../components/shop/ShopLeftDiv.js";
import TB from "../components/shop/text_box.js";
import TX from "../components/shop/text.js";
import REC from "../components/shop/rectangle.js";
import PET from "../components/shop/pet.js";
import MUSTACHE from "../components/shop/mustache.js";
import HAT from "../components/shop/hat.js";
import CS from "../components/shop/comingsoon.js";
import BRACE from "../components/shop/bracelet.js";
import "../style/petstore-style.css";

function Shop() {
  const cool_dino = require("../images/cool_dino.png");
  const textbox = require("../images/textbox.png");
  const txt = require("../images/text.png");
  const rectangle = require("../images/rectangle.png");
  const pet = require("../images/pet.png");
  const hat = require("../images/hat.png");
  const mustache = require("../images/mustache.png");
  const bracelet = require("../images/bracelet.png");
  const cs = require("../images/comingsoon.png");
  const mascot = require("../images/storemascot.jpg");
  return (
    <div className="shop">
      <h1 className="title"> Virtual Shop </h1>
      <PET pet={pet} />
      <div className="wrapper-items-mascot">
        <div className="item-carousel">
          <img className="store-item" src={mustache} alt="mustache" />
          <img className="store-item" src={hat} alt="hat" />
          <img className="store-item" src={bracelet} alt="bracelet" />
          <img className="store-item" src={cs} alt="coming soon" />
        </div>
        <img className="mascot-img" src={mascot} alt="Store Mascot" />
      </div>
    </div>
  );
}

export default Shop;
