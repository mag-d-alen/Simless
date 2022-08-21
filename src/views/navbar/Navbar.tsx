import React from "react";
import { NavbarContainer } from "./navbar.styled";
import { Link } from "react-router-dom";
import { Home } from "../Home";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to={"/"}>Home</Link>
      <Link to={"/faq"}>FAQ</Link>
      <Link to={"/contact"}>Contact Us</Link>
    </NavbarContainer>
  );
};
