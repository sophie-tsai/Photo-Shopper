import React, { useContext, useState } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/grid";
import { PicContext } from "../picContext";

function Photos() {
  const { allPhotos } = useContext(PicContext);

  const photoElements = allPhotos.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });

  return (
    <>
      <main className="photos">
        {allPhotos.length === 0 ? (
          <h3 className="loading">Loading...</h3>
        ) : (
          photoElements
        )}
      </main>
    </>
  );
}

export default Photos;
