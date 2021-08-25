import { GalleryData } from "./GalleryData.js";

import React from "react";

function Gallery() {
  return (
    <div>
      {GalleryData.map((image) => (
        <div>
          <img src={image.src} key={image.id} alt="billede" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
