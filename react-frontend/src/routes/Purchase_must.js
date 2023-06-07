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
import "../style/purchase-style.css";
import MUST_P from "../components/purchase/must_p.js";

function Purchase() {
  const cool_dino = require("../images/cool_dino.png");
  const textbox = require("../images/textbox.png");
  const txt = require("../images/text.png");
  const rectangle = require("../images/rectangle.png");
  const pet = require("../images/pet.png");
  const hat = require("../images/hat.png");
  const mustache = require("../images/mustache.png");
  const bracelet = require("../images/bracelet.png");
  const cs = require("../images/comingsoon.png");
  const must_p = require("../images/mustache_p.png");
  const handleButtonClick = async () => {
    try {
      //await axios.get("http://localhost:8000/purchase"); // Replace with your backend URL and route
      window.location.href = "/purchase";
      console.log("Button clicked!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shop">
      <Dino dino={cool_dino} />
      <TB tb={textbox} />
      <TX tx={txt} />
      <REC rec={rectangle} />
      <PET pet={pet} />
      <MUSTACHE mustache={mustache} />
      <HAT hat={hat} />
      <CS cs={cs} />
      <BRACE bracelet={bracelet} />
      <input className="button1" type="button" value="Purchase" />
      <input className="button2" type="button" value="Purchase" />
      <input className="button3" type="button" value="Purchase" />
      <MUST_P mustpurchased={must_p} />
      <h1>Virtual Shop</h1>
    </div>
  );
}

export default Purchase;
