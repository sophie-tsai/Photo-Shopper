import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PicContext } from "../picContext";

function Header() {
  const { cartItems } = useContext(PicContext);

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <div className="header">
      <Link to="/Photo-Shopper/">
        <i className="ri-home-4-line ri-fw ri-2x"></i>
      </Link>

      <div className="headerDiv">
        <span className="headerText">Photo Shopper</span>
      </div>
      <Link to="/Photo-Shopper/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </div>
  );
}

export default Header;
