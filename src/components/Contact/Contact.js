import React from "react";
import "./contact.css";
import { AiOutlineMail, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
const Contact = () => {
  return (
    <section id="contact" className="section__contact">
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__items">
          <article className="contact__item">
            <AiOutlineMail size="2rem" />
            <h3>Email</h3>
            <h4>keekeoduangdy@gmail.com</h4>
            <a
              href="mailto:keekeoduangdy@gmail.com"
              target="_blank"
              className="btn"
            >
              Send a message
            </a>
          </article>

          <article className="contact__item">
            <AiFillFacebook size="2rem" />
            <h3>Facebook</h3>
            <h4>Keoduangdy Nitiphon</h4>
            <a
              href="https://m.me/Nitiphon.keoduangdy"
              target="_blank"
              className="btn"
            >
              Send a message
            </a>
          </article>

          <article className="contact__item">
            <AiFillInstagram size="2rem" />
            <h3>Instagram</h3>
            <h4>_kk_kdd</h4>
            <a
              href="mailto:keekeoduangdy@gmail.com"
              target="_blank"
              className="btn"
            >
              Send a message
            </a>
          </article>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            type="text"
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <butto type="summmit" className="btn btn--primary">
            Send
          </butto>
        </form>
      </div>
    </section>
  );
};

export default Contact;
