import styled from "styled-components";
export const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 30px 0;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease;
  &.sticky {
    padding: 15px 0;
    background: #00303f;
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
    background: repeating-linear-gradient(
      -45deg,
      red 0%,
      yellow 7.14%,
      rgb(0, 255, 0) 14.28%,
      rgb(0, 255, 255) 21.4%,
      cyan 28.56%,
      blue 35.7%,
      magenta 42.84%,
      red 50%
    );
    background-size: 600vw 600vw;
    -webkit-text-fill-color: transparent;
    background-clip: border-box;
    -webkit-background-clip: text;
    animation: slide 8s linear infinite forwards;
  }
  &.sticky-logo > a {
    background: white;
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
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
  }
  > li > a:hover {
    color: #00a01d;
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
    background: #111;
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
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
  }
`;
