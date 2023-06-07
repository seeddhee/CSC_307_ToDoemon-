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
import axios from "axios";
import LinkButton1 from "../components/shop/linkbutton1.js";
import LinkButton2 from "../components/shop/linkbutton2.js";
import LinkButton3 from "../components/shop/linkbutton3.js";

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
  const handleButtonClick = async () => {
    try {
      await axios.get("http://localhost:8000/purchase"); // Replace with your backend URL and route
      console.log("Button clicked!");
    } catch (error) {
      console.log(error);
    }
  };

  function signIn() {
    console.log("hi");
  }

  return (
    <div className="shop">
      <h1 className="title"> Virtual Shop </h1>
      <PET pet={pet} />
      <MUSTACHE mustache={mustache} />
      <HAT hat={hat} />
      <CS cs={cs} />
      <BRACE bracelet={bracelet} />
      <LinkButton1 className="button1" location="/purchasehat" text="Purchase1" onClick={signIn} />
      <LinkButton2 className="button2" location="/purchasemust" text="Purchase2" onClick={signIn} />
      <LinkButton3 className="button3" location="/purchasebrac" text="Purchase3" onClick={signIn} />
      <h1>Virtual Shop</h1>
    </div>
  );
}

export default Shop;
