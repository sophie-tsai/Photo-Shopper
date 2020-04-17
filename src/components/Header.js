import React, { useContext } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { PicContext } from "../picContext";

function Header() {
  const {
    cartItems,
    searchAndUpdate,
    searchKeyWords,
    setSearchKeyWords,
  } = useContext(PicContext);

  const { pathname } = useLocation();

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  function handleChange(event) {
    const { value } = event.target;
    setSearchKeyWords(value);
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      searchAndUpdate(searchKeyWords, pathname);
    }
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerTextDiv">
          <Link to="/Photo-Shopper/">
            <span className="headerText">PhotoShopper</span>
          </Link>
        </div>

        <div className="searchbar">
          <input
            type="text"
            name="search"
            placeholder="search beautiful images"
            value={searchKeyWords}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
        </div>

        <div className="headerIcons">
          {/* <div className="home-icon">
            <Link to="/Photo-Shopper/">
              <i className="ri-home-4-line ri-fw ri-2x"></i>
            
          </div> */}

          <div className="heart-icon">
            <i className="ri-heart-line ri-fw ri-2x"></i>
          </div>

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
