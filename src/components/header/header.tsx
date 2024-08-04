import React, { useEffect, useState } from "react";
import {
  LogoContainer,
  MenuContainer,
  MenuItem,
  NavBar,
  NavBarContentContainer,
} from "./header-components";

export default function Header() {
  const [show, setShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onMenuIconlick = () => {
    setIsOpen(!isOpen);
    setShow(!show);
  };
  const onMenuClick = () => {
    if (show) {
      setShow(false);
      setIsOpen(false);
    }
  };

  return (
    <NavBar className={isScroll ? "sticky" : ""}>
      <NavBarContentContainer>
        <LogoContainer className={isScroll ? "sticky-logo" : ""}>
          <a href="# ">Devendra Golakoti</a>
        </LogoContainer>
        <MenuContainer className={show ? "active" : ""}>
          <MenuItem onClick={onMenuClick}>
            <a href="#home" className="menu-btn">
              Home
            </a>
          </MenuItem>
          <MenuItem onClick={onMenuClick}>
            <a href="#about" className="menu-btn">
              About
            </a>
          </MenuItem>
          <MenuItem onClick={onMenuClick}>
            <a href="#services" className="menu-btn">
              Services
            </a>
          </MenuItem>

          <MenuItem onClick={onMenuClick}>
            <a href="#skills" className="menu-btn">
              Skills
            </a>
          </MenuItem>

          <MenuItem onClick={onMenuClick}>
            <a href="#contact" className="menu-btn">
              Contact
            </a>
          </MenuItem>
        </MenuContainer>

        {/* <div className="menu-btn " onClick={onMenuIconlick}>
          <i className="fas fa-bars"></i>
        </div> */}

        <div
          className={`menu-btn ${isOpen ? "open" : ""}`}
          id="nav-icon3"
          onClick={onMenuIconlick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </NavBarContentContainer>
    </NavBar>
  );
}
