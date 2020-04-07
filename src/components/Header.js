import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Photos from "../pages/Photos";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Photo Shopper</h2>
      </Link>

      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
}

export default Header;
