import React, { useContext, useCallback, useEffect } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/grid";
import { PicContext } from "../picContext";
import lottie from "lottie-web";

function Photos() {
  const { allPhotos, currentPage, setCurrentPage } = useContext(PicContext);

  useEffect(() => {
    setCurrentPage("");
  }, [currentPage]);

  const ref = useCallback((node) => {
    if (node !== null) {
      lottie.loadAnimation({
        container: node,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path:
          "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/iphone-spinner-1/iphone-spinner-1.json",
      });
    }
  }, []);

  const photoElements = allPhotos.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });

  return (
    <>
      <main className="photos">
        {allPhotos.length === 0 ? (
          <div id="loadingDiv" ref={ref}></div>
        ) : (
          photoElements
        )}
      </main>
    </>
  );
}

export default Photos;
