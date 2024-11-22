import React, { useEffect, useState } from "react";
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
import CreditCard from "./components/credit-card-section/credit-card-section";

const App = () => {
  const [isSmoothScroll, setIsSmoothScroll] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const navbar = document.querySelector(".navbar");
      const scrollUpBtn = document.querySelector(".scroll-up-btn");

      if (navbar && scrollUpBtn) {
        if (window.scrollY > 50) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }

        // scroll-up button show/hide script
        if (window.scrollY > 1600) {
          scrollUpBtn.classList.add("show");
        } else {
          scrollUpBtn.classList.remove("show");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: isSmoothScroll ? "smooth" : "auto" });
    setIsSmoothScroll(false);
  };

  return (
    <>
      <div className="scroll-up-btn" onClick={handleClick}>
        <i className="fas fa-angle-up"></i>
      </div>
      <Header />
      <Home />
      <AboutSection />
      <SkillSection />
      <ServicesSection />
      <CreditCard />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
