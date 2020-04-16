import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PicContext } from "../picContext";

function Header() {
  const { cartItems } = useContext(PicContext);

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerTextDiv">
          <span className="headerText">PhotoShopper</span>
        </div>

        <div className="searchbar">
          <input
            type="text"
            name="search"
            placeholder="search beautiful images"
          />
        </div>

        <div className="headerIcons">
          <div className="home-icon">
            <Link to="/Photo-Shopper/">
              <i className="ri-home-4-line ri-fw ri-2x"></i>
            </Link>
          </div>

          {/* <div className="heart-icon">
            <i className="ri-heart-line ri-fw ri-2x"></i>
          </div> */}

          <div className="cart-icon">
            <Link to="/Photo-Shopper/cart">
              <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
