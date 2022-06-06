import React from "react";
import "./about.css";
import me from "../../assets/header-photo.png";
const About = () => {
  return (
    <section id="about" className="section__about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container container__about">
        <div className="about__image">
          <div className="about__me">
            <img src={me} alt="me"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h3>Bio</h3>
              <p>Name: Keoduangdy Nitphon</p>
            </article>

            <article className="about__card">
              <h3>Education</h3>
              <p>School: Tsuyama college</p>
            </article>

            <article className="about__card">
              <h3>Hobby</h3>
              <p>Cycling</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
