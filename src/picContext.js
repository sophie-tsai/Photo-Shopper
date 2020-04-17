import React, { useState, useEffect } from "react";
import {
  getLatestImagesPromise,
  getSearchImagesPromise,
} from "./utils/ImageRepository";
const PicContext = React.createContext();

function PicContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");

  useEffect(() => {
    getLatestImagesPromise().then((filteredData) => setAllPhotos(filteredData));
  }, []);

  function toggleFavorite(id) {
    const updatedArray = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArray);
  }

  function addToCart(newItem) {
    setCartItems((prevPhotos) => [...prevPhotos, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevPhotos) => prevPhotos.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      getSearchImagesPromise(searchKeyWords).then((filteredData) =>
        setAllPhotos(filteredData)
      );
      setSearchKeyWords("");
    }
  }

  return (
    <>
      <PicContext.Provider
        value={{
          allPhotos,
          toggleFavorite,
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
          handleKeyUp,
          searchKeyWords,
          setSearchKeyWords,
        }}
      >
        {children}
      </PicContext.Provider>
    </>
  );
}

export { PicContextProvider, PicContext };
