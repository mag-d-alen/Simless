import React from "react";
import { NavbarContainer, NavLink } from "./navbar.styled";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/faq"}>FAQ</NavLink>
      <NavLink to={"/contact"}>Contact Us</NavLink>
      <NavLink to={"/balance"}>Manage your SIM</NavLink>
    </NavbarContainer>
  );
};
