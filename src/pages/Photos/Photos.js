import React, { useContext, useCallback } from "react";
import Image from "../../components/Image";
// import { getClass } from "../../utils/grid";
import { PicContext } from "../../picContext";
import lottie from "lottie-web";
import "./Photos.css";

function Photos() {
  const { allPhotos, queryNextPage } = useContext(PicContext);

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

  const photoElements = allPhotos.map((photo) => {
    return <Image key={photo.id} img={photo} />;
  });

  return (
    <div className="photos-container">
      {allPhotos.length === 0 ? (
        <div ref={ref}></div>
      ) : (
        <>
          <main className="photos">{photoElements}</main>
          <div className="button-container">
            <button className="next-page" onClick={queryNextPage}>
              next page
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Photos;
