import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import "./header.css";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/Nitiphon.keoduangdy/" target="_blank">
        <AiFillFacebook size="2rem">
          <span className="showInfo"> facebook</span>
        </AiFillFacebook>
      </a>
      <a href="https://www.instagram.com/_kk_kdd/" target="_blank">
        <AiFillInstagram size="2rem" />
      </a>
      <a href="https://github.com/zxcwer" target="_blank">
        <AiFillGithub size="2rem" />
      </a>
    </div>
  );
};

export default HeaderSocial;
