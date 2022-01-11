import { GalleryData } from "./GalleryData.js";

import ModalImage from "react-modal-image";
import React, { useLayoutEffect } from "react";

const Gallery = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="gallery">
      {GalleryData.map((image) => (
        <ModalImage
          key={image.id}
          hideDownload={true}
          hideZoom={true}
          className="gallery-img"
          small={image.src}
          large={image.src}
        />
      ))}
    </div>
  );
};

export default Gallery;
