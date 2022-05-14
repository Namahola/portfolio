import React, { useLayoutEffect } from "react";
import Footer from "./footer.js";
import Gallery from "./Gallery.js";

function Work() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Work;
