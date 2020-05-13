import React, { useState, useEffect } from "react";
import {
  getLatestImagesPromise,
  getSearchImagesPromise,
} from "./utils/ImageRepository";
const PicContext = React.createContext();

function PicContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [heartItems, setHeartItems] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    getLatestImagesPromise().then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArray = allPhotos.map((photo) => {
      if (photo.id === id) {
        addItem(photo, "loved");
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }

      return photo;
    });
    setAllPhotos(updatedArray);
  }

  function addItem(newItem, container) {
    if (container === "cart") {
      setCartItems((prevPhotos) => [...prevPhotos, newItem]);
      return;
    }
    setHeartItems((prevPhotos) => [...prevPhotos, newItem]);
  }

  function removeItem(id, container) {
    if (container === "cart") {
      setCartItems((prevPhotos) => prevPhotos.filter((item) => item.id !== id));
      return;
    }
    setHeartItems((prevPhotos) => prevPhotos.filter((item) => item.id !== id));
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
          addItem,
          removeItem,
          clearCart,
          searchAndUpdate,
          searchKeyWords,
          setSearchKeyWords,
          currentPage,
          setCurrentPage,
          heartItems,
        }}
      >
        {children}
      </PicContext.Provider>
    </>
  );
}

export { PicContextProvider, PicContext };
