import React, { useState, useEffect } from "react";

const PicContext = React.createContext();

function PicContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <>
      <PicContext.Provider value={{ allPhotos }}>
        {children}
      </PicContext.Provider>
    </>
  );
}

export { PicContextProvider, PicContext };
