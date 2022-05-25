import { GalleryData } from "./GalleryData.js";
import React, { useLayoutEffect } from "react";

const Gallery = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="gallery">
      {GalleryData.map((image) => (
        <div>
          {" "}
          <a href={image.url}>
            <img
              src={image.small}
              alt="Billede af projekt"
              key={image.id}
              className="gallery-img"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
