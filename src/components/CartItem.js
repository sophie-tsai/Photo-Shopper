import React, { useContext } from "react";
import { PicContext } from "../picContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(PicContext);
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
