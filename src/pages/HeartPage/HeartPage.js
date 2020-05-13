import React, { useContext } from "react";
import HeartItem from "../../components/HeartItem";
import { PicContext } from "../../picContext";
import "./Heart.css";

function HeartPage() {
  const { heartItems } = useContext(PicContext);
  const heartItemElements = heartItems.map((item) => (
    <HeartItem key={item.id} item={item} />
  ));

  return (
    <div className="heart-page">
      <h1>Your Favorites</h1>
      {heartItemElements}
      {heartItems.length === 0 && (
        <h2 className="no-favorites">Hm, it's empty!</h2>
      )}
    </div>
  );
}

export default HeartPage;
