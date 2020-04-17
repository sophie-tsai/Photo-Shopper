import React, { useContext } from "react";
import { PicContext } from "../picContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    PicContext
  );

  const [isHovered, ref] = useHover();

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function addIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} alt={img.alt} className="image-grid" />
      {heartIcon()}
      {addIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;