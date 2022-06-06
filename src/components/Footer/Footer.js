import React from "react";
import "./footer.css";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container container__footer">
        <div className="footer__name">
          <p>Developed by Keekeoduangdy Nitiphon </p>
          <p>copyright &copy; 2022</p>
        </div>
        <div className="footer__copyright"></div>
        <div className="footer_socials">
          <a
            href="https://www.facebook.com/Nitiphon.keoduangdy/"
            target="_blank"
          >
            <AiFillFacebook size="2rem" />
          </a>
          <a href="https://www.instagram.com/_kk_kdd/" target="_blank">
            <AiFillInstagram size="2rem" />
          </a>
          <a href="ttps://github.com/zxcwer" target="_blank">
            <AiFillGithub size="2rem" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
