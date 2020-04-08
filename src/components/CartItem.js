import React, { useContext } from "react";
import { PicContext } from "../picContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [isHovered, ref] = useHover();
  const { removeFromCart } = useContext(PicContext);
  const binClassName = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${binClassName}`}
        ref={ref}
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
