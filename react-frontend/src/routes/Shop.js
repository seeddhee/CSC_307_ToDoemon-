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
      <h1>Virtual Shop</h1>
    </div>
  );
}

export default Shop;
