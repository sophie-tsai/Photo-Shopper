import React from "react";

function HeartItem(props) {
  const { item } = props;
  console.log(item);
  return (
    <div className="heart-item">
      <img src={item.url} alt={item.url} width="160px" />
      <span>by {item.photographer}</span>
    </div>
  );
}

export default HeartItem;
