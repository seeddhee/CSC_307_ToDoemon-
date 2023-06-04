import React from "react";

function ItemOption(props) {
  return (
    <div className="item-option">
      <img className="item-image" src={props.image} alt={props.name} />
      <button className="equip-button" onClick={props.onClick} id={props.id}>
        {props.text}
      </button>
    </div>
  );
}

export default ItemOption;
