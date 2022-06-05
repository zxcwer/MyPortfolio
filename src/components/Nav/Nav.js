import React from "react";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { BsFilePerson } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <BsFilePerson />
      </a>
      <a href="#portfolio">
        <FiBriefcase />
      </a>
      <a href="#contact">
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
