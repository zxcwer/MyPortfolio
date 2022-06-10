import React, { useState } from "react";
import "./portfolio.css";
import portfolioData from "./portfolioData";
const Portfolio = () => {
  const [data, setData] = React.useState();
  return (
    <section id="portfolio" className="section__portfolio">
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <div className="portfolio__items">
          <article className="portfolio__item">
            <div>
              <img
                src={portfolioData[0].img}
                className="portfolio__item-image"
              ></img>
            </div>
            <h3>{portfolioData[0].title}</h3>
            <a href={portfolioData[0].urlCode} target="_blank" className="btn ">
              Source code
            </a>
            <a
              href={portfolioData[0].urlDemo}
              target="_blank"
              className="btn btn--primary"
            >
              Demo
            </a>
          </article>
        </div>
        <div className="portfolio__items">
          <article className="portfolio__item">
            <div>
              <img
                src={portfolioData[1].img}
                className="portfolio__item-image"
              ></img>
            </div>
            <h3>{portfolioData[1].title}</h3>
            <a href={portfolioData[1].urlCode} target="_blank" className="btn ">
              Source code
            </a>
            <a
              href={portfolioData[1].urlDemo}
              target="_blank"
              className="btn btn--primary"
            >
              Demo
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
