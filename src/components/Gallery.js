import { GalleryData } from "./GalleryData.js";

import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      {GalleryData.map((image) => (
        <div className="gallery-box">
          <img
            className="gallery-image"
            src={image.src}
            key={image.id}
            alt="billede"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
