import React, { useState, useEffect } from "react";
import {
  getLatestImagesPromise,
  getSearchImagesPromise,
} from "./ImageRepository";
const PicContext = React.createContext();

function PicContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [heartItems, setHeartItems] = useState([]);
  const [searchKeyWords, setSearchKeyWords] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [queryPage, setQueryPage] = useState(1);
  const [latestImagesPage, setLatestImagesPage] = useState(1);

  useEffect(() => {
    getLatestImagesPromise(latestImagesPage).then((data) => setAllPhotos(data));
    setLatestImagesPage((prevPage) => prevPage + 1);
    if (localStorage.cartStorage) {
      const cartStorage = JSON.parse(localStorage.cartStorage);
      setCartItems(cartStorage);
    }
    if (localStorage.heartStorage) {
      const heartStorage = JSON.parse(localStorage.heartStorage);
      setHeartItems(heartStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.cartStorage = JSON.stringify(cartItems);
  }, [cartItems]);

  useEffect(() => {
    localStorage.heartStorage = JSON.stringify(heartItems);
  }, [heartItems]);

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
    setQueryPage(1);
    setAllPhotos([]);

    getSearchImagesPromise(searchKeyWords, queryPage)
      .then((data) => setAllPhotos(data))
      .then(setCurrentPage(pathname));
    setQueryPage((prevPage) => prevPage + 1);
  }

  function queryNextPage() {
    if (searchKeyWords) {
      getSearchImagesPromise(searchKeyWords, queryPage).then((data) =>
        setAllPhotos(data)
      );
      setQueryPage((prevPage) => prevPage + 1);
      return;
    }

    getLatestImagesPromise(latestImagesPage).then((data) => setAllPhotos(data));
    setLatestImagesPage((prevPage) => prevPage + 1);
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
          queryNextPage,
          queryPage,
        }}
      >
        {children}
      </PicContext.Provider>
    </>
  );
}

export { PicContextProvider, PicContext };
