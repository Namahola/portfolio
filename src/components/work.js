import React from "react";
import WorkData from "./WorkData.js";
import Footer from "./footer.js";

function Work() {
  return (
    <div>
      <div className="work">
        {WorkData.map((image) => (
          <div className="work-content">
            <h1 className="work-title">{image.title}</h1>
            <p className="work-description">{image.description}</p>
            <img
              className="work-image"
              src={image.src}
              key={image.id}
              alt="billede"
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Work;
