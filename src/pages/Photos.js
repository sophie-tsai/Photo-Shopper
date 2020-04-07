import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/grid";
import { PicContext } from "../picContext";

function Photos() {
  const { allPhotos } = useContext(PicContext);
  const photoElements = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));

  return <main className="photos">{photoElements}</main>;
}

export default Photos;
