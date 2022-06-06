import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio",
        "portfolio_template",
        form.current,
        "MXNzIKL3Jy4i39Jxl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="section__contact">
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__items">
          <article className="contact__item">
            <AiOutlineMail size="1.5rem" />
            <h3>Email</h3>
            <h4>i-keo@tsuyama.kosen-ac.jp</h4>
            <a
              href="mailto:i-keo@tsuyama.kosen-ac.jp"
              target="_blank"
              className="btn"
            >
              Send a message
            </a>
          </article>

          <article className="contact__item">
            <AiFillFacebook size="1.5rem" />
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
            <AiFillInstagram size="1.5rem" />
            <h3>Instagram</h3>
            <h4>_kk_kdd</h4>
            <a
              href="https://www.instagram.com/_kk_kdd/"
              target="_blank"
              className="btn"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn--primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
