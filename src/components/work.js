import React from "react";
import WorkData from "./WorkData.js";

function Work() {
  return (
    <div className="work">
      {WorkData.map((image) => (
        <div>
          <h1>{image.title}</h1>
          <img
            className="work-image"
            src={image.src}
            key={image.id}
            alt="billede"
          />
        </div>
      ))}
    </div>
  );
}

export default Work;
