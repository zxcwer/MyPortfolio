import React from "react";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { BsFilePerson } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsFilePerson />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FiBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
