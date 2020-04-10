import React, { useState, useEffect } from "react";

const cacheContext = React.createContext();

function CacheContextProvider({ children }) {
  const [allImagesReady, setAllImagesReady] = useState(true);

  // useEffect(() => {}, []);

  // function checkImageComplete(numLoaded, allPhotos) {
  //   if (numLoaded === allPhotos.length) {
  //     setAllImagesReady(true);
  //     console.log("setting to true");
  //   }
  // }

  return (
    <>
      <cacheContext.Provider value={{ allImagesReady }}>
        {children}
      </cacheContext.Provider>
    </>
  );
}

export { CacheContextProvider, cacheContext };
