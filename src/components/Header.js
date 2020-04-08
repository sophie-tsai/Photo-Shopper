import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PicContext } from "../picContext";

function Header() {
  const { cartItems } = useContext(PicContext);

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <header>
      <Link to="/">
        <h2>Photo Shopper</h2>
      </Link>

      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
