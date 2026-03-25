import { useCallback, useEffect, useState } from "react";
import { SECTION_IDS } from "../../config/site";

const SCROLL_SCROLLED_PX = 56;
const SCROLL_HEADER_EXIT_PX = 670;

type HeaderProps = {
  isLoading: boolean;
};

const CENTER_NAV: { href: string; label: string }[] = [
  { href: `#${SECTION_IDS.home}`, label: "Home" },
  { href: `#${SECTION_IDS.about}`, label: "About" },
  { href: `#${SECTION_IDS.services}`, label: "Services" },
  { href: `#${SECTION_IDS.skills}`, label: "Skills" },
];

export default function Header({ isLoading }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [isMobileScrolled, setIsMobileScrolled] = useState(false); // ✅ mobile
  useEffect(() => {
    const sync = () => {
      const y = window.scrollY;
      const isMobile = window.innerWidth <= 947;

      if (isMobile) {
        // 📱 mobile only class
        setIsMobileScrolled(y > 570);

        // reset desktop states
        setIsScrolled(false);
        setIsExit(false);
      } else {
        // 💻 desktop behavior
        setIsScrolled(y > SCROLL_SCROLLED_PX);
        setIsExit(y > SCROLL_HEADER_EXIT_PX && !isMenuOpen);

        // reset mobile
        setIsMobileScrolled(false);
      }
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [isMenuOpen]);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((previous) => !previous);
  }, []);

  const handleMenuItemClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  if (isLoading) {
    return (
      <nav
        className="site-header is-loading"
        aria-hidden="true"
        data-scrolled="false"
      >
        <div className="site-header__chrome">
          <div className="site-header__pill">
            <div className="site-header__rail site-header__rail--start">
              <div className="site-header__brand">
                <div className="skeleton skeleton-text skeleton-logo" />
              </div>
            </div>
            <div
              className="site-header__rail site-header__rail--center"
              aria-hidden
            >
              <div className="site-header__nav-skeleton">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span className="skeleton skeleton-pill" key={i} />
                ))}
              </div>
            </div>
            <div className="site-header__rail site-header__rail--end">
              <div className="site-header__end">
                <span className="skeleton skeleton-pill site-header__cta-sk" />
                <div className="site-header__burger-placeholder skeleton skeleton-bar" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={[
        "site-header",
        isScrolled && "scrolled",
        isExit && "header-exit",
        isMenuOpen && "nav-open",
        isMobileScrolled && "mobile-scrolled",
      ]
        .filter(Boolean)
        .join(" ")}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <div className="site-header__chrome">
        <div className="site-header__pill">
          <div className="site-header__rail site-header__rail--start">
            <div className="site-header__brand">
              <a
                href={`#${SECTION_IDS.home}`}
                className="site-header__logo"
                onClick={handleMenuItemClick}
              >
                Devendra Golakoti
              </a>
            </div>
          </div>

          <div className="site-header__rail site-header__rail--center">
            <ul
              className={`site-header__nav${isMenuOpen ? " is-open" : ""}`}
              id="site-header-nav"
            >
              {CENTER_NAV.map((link) => (
                <li className="site-header__nav-item" key={link.href}>
                  <a
                    href={link.href}
                    className="site-header__link"
                    onClick={handleMenuItemClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-header__rail site-header__rail--end">
            <div className="site-header__end">
              <a
                href={`#${SECTION_IDS.contact}`}
                className="site-header__cta"
                onClick={handleMenuItemClick}
              >
                Contact
              </a>
              <button
                type="button"
                className={`site-header__burger menu-btn ${isMenuOpen ? "open" : ""}`}
                id="nav-icon3"
                onClick={handleToggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="site-header-nav"
              >
                <span />
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
