import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { PicContext } from "../../utils/picContext";
import "./Header.css";

function Header() {
  const [width, setWidth] = useState(900);
  console.log(width);

  const {
    cartItems,
    searchAndUpdate,
    searchKeyWords,
    setSearchKeyWords,
    heartItems,
  } = useContext(PicContext);

  const setWindowWidth = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setWidth(windowWidth);
  };

  useEffect(() => {
    setWindowWidth();

    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);

  const { pathname } = useLocation();

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  const heartClassName =
    heartItems.length > 0 ? "ri-heart-fill" : "ri-heart-line";

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
            {width > 600 ? (
              <span className="headerText">PhotoShopper</span>
            ) : (
              <i className="ri-camera-fill ri-fw ri-2x"></i>
            )}
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

        <div className="icon-container">
          <div className="heart-icon">
            <Link to="/Photo-Shopper/Heart">
              <i className={`${heartClassName} header-icon ri-fw ri-2x`}></i>
            </Link>
          </div>

          <div className="cart-icon">
            <Link to="/Photo-Shopper/Cart">
              <i className={`${cartClassName} header-icon ri-fw ri-2x`}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
