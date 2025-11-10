import styled from "styled-components";
export const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 30px 0;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease;
  background: var(--primary-color);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  &.sticky {
    padding: 15px 0;
    background: var(--primary-color);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  }
`;
export const NavBarContentContainer = styled.div`
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 0 23px;
  }
  @media (max-width: 991px) {
    padding: 0 50px;
  }
  @media (max-width: 947px) {
    max-width: 930px;
  }
`;
export const LogoContainer = styled.div`
  > a {
    font-size: 35px;
    font-weight: 600;
    background: linear-gradient(
      120deg,
      var(--accent-color) 0%,
      color-mix(in srgb, var(--accent-color) 35%, var(--on-primary-color)) 60%,
      color-mix(in srgb, var(--accent-color) 20%, var(--on-primary-color)) 100%
    );
    background-size: 600vw 600vw;
    -webkit-text-fill-color: transparent;
    background-clip: border-box;
    -webkit-background-clip: text;
    animation: slide 8s linear infinite forwards;
  }
  &.sticky-logo > a {
    background: var(--on-primary-color);
    -webkit-text-fill-color: transparent;
    background-clip: border-box;
    -webkit-background-clip: text;
  }
  @keyframes slide {
    0% {
      background-position-x: 0%;
    }

    100% {
      background-position-x: 600vw;
    }
  }
`;
export const MenuContainer = styled.ul`
  > li {
    list-style: none;
    display: inline-block;
  }
  > li > a {
    display: block;
    color: var(--on-primary-color);
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
  }
  > li > a:hover {
    color: var(--accent-color);
  }
  &.active {
    left: 0;
    width: 80%;
    border-radius: 6px;
  }
  @media (max-width: 947px) {
    position: fixed;
    height: 100vh;
    width: 100%;
    left: -100%;
    top: 0;
    background: var(--mobile-nav-background);
    text-align: center;
    padding-top: 80px;
    transition: all 0.3s ease;
    > li {
      display: block;
    }
    > li > a {
      display: inline-block;
      margin: 20px 0;
      font-size: 25px;
    }
  }
`;
export const MenuItem = styled.li`
  > a {
    color: var(--on-primary-color);
    font-size: 23px;
    cursor: pointer;
    display: none;
  }
`;
export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ThemeToggleButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: var(--on-primary-color);
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease,
    transform 0.3s ease;
  cursor: pointer;
  @media (max-width: 947px) {
    order: -1;
  }
  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.5);
    color: var(--accent-color);
    transform: translateY(-2px);
    outline: none;
  }
`;
