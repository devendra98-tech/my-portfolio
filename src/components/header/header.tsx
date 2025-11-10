import { useCallback, useState } from "react";
import {
  LogoContainer,
  MenuContainer,
  MenuItem,
  NavBar,
  NavBarContentContainer,
  ControlsWrapper,
  ThemeToggleButton,
} from "./header-components";

type HeaderProps = {
  isSticky: boolean;
  isLoading: boolean;
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function Header({
  isSticky,
  isLoading,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((previous) => !previous);
  }, []);

  const handleMenuItemClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  if (isLoading) {
    return (
      <NavBar className={isSticky ? "sticky" : ""} aria-hidden="true">
        <NavBarContentContainer>
          <LogoContainer className={isSticky ? "sticky-logo" : ""}>
            <div className="skeleton skeleton-text skeleton-logo" />
          </LogoContainer>
          <ControlsWrapper>
            <MenuContainer>
              {[...Array(4)].map((_, index) => (
                <MenuItem key={index}>
                  <span className="skeleton skeleton-pill" />
                </MenuItem>
              ))}
            </MenuContainer>
            <span className="skeleton skeleton-circle" />
            <div className="menu-btn placeholder">
              <span className="skeleton skeleton-bar" />
            </div>
          </ControlsWrapper>
        </NavBarContentContainer>
      </NavBar>
    );
  }

  return (
    <NavBar className={isSticky ? "sticky" : ""}>
      <NavBarContentContainer>
        <LogoContainer className={isSticky ? "sticky-logo" : ""}>
          <a href="#home">Devendra Golakoti</a>
        </LogoContainer>
        <ControlsWrapper>
          <MenuContainer className={isMenuOpen ? "active" : ""}>
            <MenuItem>
              <a
                href="#home"
                className="menu-btn"
                onClick={handleMenuItemClick}
              >
                Home
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#about"
                className="menu-btn"
                onClick={handleMenuItemClick}
              >
                About
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#services"
                className="menu-btn"
                onClick={handleMenuItemClick}
              >
                Services
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#skills"
                className="menu-btn"
                onClick={handleMenuItemClick}
              >
                Skills
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#contact"
                className="menu-btn"
                onClick={handleMenuItemClick}
              >
                Contact
              </a>
            </MenuItem>
          </MenuContainer>
          <ThemeToggleButton
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            aria-pressed={theme === "dark"}
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
          </ThemeToggleButton>
          <button
            type="button"
            className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            id="nav-icon3"
            onClick={handleToggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
            <span />
          </button>
        </ControlsWrapper>
      </NavBarContentContainer>
    </NavBar>
  );
}
