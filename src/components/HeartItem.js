import React, { useContext } from "react";
import useHover from "../hooks/useHover";
import { PicContext } from "../utils/picContext";

function HeartItem(props) {
  const [isHovered, ref] = useHover();
  const { removeItem } = useContext(PicContext);
  const { item } = props;
  const deleteClassName = isHovered ? "fill" : "line";

  return (
    <div className="heart-item">
      <i
        className={`ri-close-circle-${deleteClassName}`}
        ref={ref}
        onClick={() => removeItem(item.id, "heart")}
      ></i>
      <img src={item.url} alt={item.url} width="160px" />

      <span>by {item.photographer}</span>
    </div>
  );
}

export default HeartItem;
