import { useCallback, useEffect, useState } from "react";
import "./App.css";
import {
  AboutSection,
  Footer,
  Header,
  Home,
  ServicesSection,
} from "./components";
import SkillSection from "./components/skills-section/skills-section";
import ContactSection from "./components/contact-section";

const App = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const stored = window.localStorage.getItem("preferred-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 50);
      setShowScrollUpButton(scrollPosition > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferred-theme", theme);
    }
  }, [theme]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <>
      <button
        type="button"
        className={`scroll-up-btn${showScrollUpButton ? " show" : ""}`}
        onClick={handleClick}
        aria-label="Back to top"
      >
        <span aria-hidden="true">
          <i className="fas fa-angle-up"></i>
        </span>
      </button>
      <Header
        isSticky={isSticky}
        isLoading={isLoading}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
      <Home isLoading={isLoading} />
      <AboutSection isLoading={isLoading} />
      <SkillSection isLoading={isLoading} />
      <ServicesSection isLoading={isLoading} />
      <ContactSection isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default App;
