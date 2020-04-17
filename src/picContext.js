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
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    getLatestImagesPromise().then((data) => setAllPhotos(data));
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

  function searchAndUpdate(searchKeyWords, pathname) {
    getSearchImagesPromise(searchKeyWords).then((data) => setAllPhotos(data));
    setSearchKeyWords("");
    setCurrentPage(pathname);
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
          searchAndUpdate,
          searchKeyWords,
          setSearchKeyWords,
          currentPage,
          setCurrentPage,
        }}
      >
        {children}
      </PicContext.Provider>
    </>
  );
}

export { PicContextProvider, PicContext };
