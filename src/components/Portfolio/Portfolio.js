import React from "react";
import "./portfolio.css";
import me from "../../assets/LittleTurtle.PNG";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section__portfolio">
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <div className="portfolio__items">
          <article className="portfolio__item">
            <div>
              <img src={me} className="portfolio__item-image"></img>
            </div>
            <h3>Portfolio</h3>
            <a
              href="https://github.com/zxcwer/MyPortfolio"
              target="_blank"
              className="btn "
            >
              Source code
            </a>
            <a
              href="https://zxcwer.github.io/MyPortfolio/"
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
