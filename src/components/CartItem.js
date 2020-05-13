import React, { useContext } from "react";
import { PicContext } from "../picContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [isHovered, ref] = useHover();
  const { removeItem } = useContext(PicContext);
  const binClassName = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${binClassName}`}
        ref={ref}
        onClick={() => removeItem(item.id, "cart")}
      ></i>
      <img src={item.url} alt={item.alt} width="160px" />
      <p>$9.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
