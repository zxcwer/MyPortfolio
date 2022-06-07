import React from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import me from "../../assets/me.jpg";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Gie </h1>
        <img src={me} alt="me"></img>
      </div>
      <HeaderSocial />
      <a href="#contact" className="scroll__down">
        scroll down
      </a>
    </header>
  );
};

export default Header;
