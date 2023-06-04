import React from "react";

function ItemOption(props) {
  let text = "Wear";
  let className = "equip-button";
  props.visible.forEach((item) => {
    if (item == props.id) {
      text = "Equipped";
      className = "equip-button-selected";
    }
  });
  return (
    <div className="item-option">
      <img className="item-image" src={props.image} alt={props.id} />
      <button className={className} onClick={props.onClick} value={props.id}>
        {text}
      </button>
    </div>
  );
}

export default ItemOption;
