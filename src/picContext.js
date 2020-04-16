import React, { useState, useEffect } from "react";
// import Photos from "./pages/Photos";

const PicContext = React.createContext();

function PicContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // const url =
  //   "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  const unsplashUrl =
    "https://api.unsplash.com/search/photos?&query=dog&per_page=40&order_by=popular&client_id=py_AVXff_HcNI2VvUQFKlxwxEF4V-aCDHsK-FRfCwoo";

  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const imgPromises = data.map((img) => {
    //       return new Promise(function (resolve) {
    //         const image = new Image();
    //         image.src = img.url;
    //         image.onload = () => {
    //           resolve();
    //         };
    //       });
    //     });
    //     Promise.all(imgPromises).then(() => setAllPhotos(data));
    //   });

    fetch(unsplashUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        const filteredData = data.results.map((photo) => ({
          id: photo.id,
          url: photo.urls.regular,
          alt: photo.alt_description,
          isFavorite: false,
        }));
        console.log(filteredData);
        setAllPhotos(filteredData);
      });
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
      console.log("entered!");
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
        }}
      >
        {children}
      </PicContext.Provider>
    </>
  );
}

export { PicContextProvider, PicContext };
