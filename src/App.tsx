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
// import TestimonialsSection from "./components/testimonials-section";
import BlogSection from "./components/blog-section";
// import GitHubReposSection from "./components/github-repos-section";
import BrandedLoader from "./components/branded-loader";
import CommandPalette, {
  useCommandPaletteToggle,
} from "./components/command-palette/command-palette";
// import { useAccentColor } from "./hooks/useAccentColor";
// import ThemePaletteSection from "./components/theme-palette-section";

const App = () => {
  const [loaderPhase, setLoaderPhase] = useState<
    "loading" | "exiting" | "gone"
  >("loading");
  const isLoading = loaderPhase === "loading";

  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const [theme] = useState<"light" | "dark">(() => {
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

  // const { accentHex, setAccentHex } = useAccentColor(theme);
  const { open: commandOpen, close: closeCommand } =
    useCommandPaletteToggle();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUpButton(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaderPhase("exiting"), 780);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaderPhase !== "exiting") return;
    const fallback = window.setTimeout(() => {
      setLoaderPhase((p) => (p === "exiting" ? "gone" : p));
    }, 900);
    return () => window.clearTimeout(fallback);
  }, [loaderPhase]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("preferred-theme", theme);
    }
  }, [theme]);

  const handleLoaderExitComplete = useCallback(() => {
    setLoaderPhase("gone");
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loaderPhase !== "gone" && (
        <BrandedLoader
          phase={loaderPhase}
          onExitComplete={handleLoaderExitComplete}
        />
      )}
      <CommandPalette open={commandOpen} onClose={closeCommand} />
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
      <Header isLoading={isLoading} />
      <Home isLoading={isLoading} />
      <AboutSection isLoading={isLoading} />
      <SkillSection isLoading={isLoading} />
      <ServicesSection isLoading={isLoading} />
      {/* <TestimonialsSection isLoading={isLoading} /> */}
      <BlogSection isLoading={isLoading} />
      {/* <GitHubReposSection isLoading={isLoading} /> */}
      <ContactSection isLoading={isLoading} />
      {/* <ThemePaletteSection
        isLoading={isLoading}
        accentHex={accentHex}
        onAccentChange={setAccentHex}
      /> */}
      <Footer />
    </>
  );
};

export default App;
