import React, { useLayoutEffect } from "react";
import Footer from "./footer";
import Nav from "./Nav";
import WorkData from "./WorkData";

function Work() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="work">
      <Nav />
      <section className="work-section">
        {WorkData.map((image) => (
          <div className="project">
            <h3 className="project-title">{image.title}</h3>
            <a
              href={image.url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img
                src={image.src}
                alt="Billede af projekt"
                key={image.id}
                className="project-img"
              />
            </a>
            <p className="project-description">{image.description}</p>
            <div className="project-btn">
              <a href={image.url} target="_blank" rel="noreferrer">
                Se siden her
              </a>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Work;
