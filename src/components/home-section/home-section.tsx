import { FC, useEffect, useRef, useState } from "react";
import {
  HomeSectionContainer,
  HomeSectionContentWrapper,
  HomeSectionPrimaryTitle,
  HomeSectionSecondaryTitle,
  HomeSectionTitle,
  HomeSectionWrapper,
} from "./home-section-components";
import { useGsapReveal } from "../../hooks/useGsapReveal";

const texts = [
  "Frontend Developer",
  "Web Developer",
  "Shopify Developer",
  "React Developer",
];
type HomeProps = {
  isLoading: boolean;
};

const Home: FC<HomeProps> = ({ isLoading }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);

  useGsapReveal(containerRef, { y: 20 }, !isLoading);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  if (isLoading) {
    return (
      <HomeSectionContainer id="home" ref={containerRef}>
        <HomeSectionWrapper>
          <HomeSectionContentWrapper>
            <div className="skeleton skeleton-text skeleton-subtitle" />
            <div className="skeleton skeleton-text skeleton-title" />
            <div className="skeleton skeleton-text skeleton-tagline" />
          </HomeSectionContentWrapper>
        </HomeSectionWrapper>
      </HomeSectionContainer>
    );
  }

  return (
    <>
      <HomeSectionContainer id="home" ref={containerRef}>
        <HomeSectionWrapper>
          <HomeSectionContentWrapper>
            <HomeSectionPrimaryTitle data-animate="fade">
              Hello, This is
            </HomeSectionPrimaryTitle>
            <HomeSectionSecondaryTitle data-animate="fade">
              <span>D</span>evendra <span>G</span>olakoti
            </HomeSectionSecondaryTitle>
            <HomeSectionTitle data-animate="fade">
              And I'm a{" "}
              <span className="typing">{texts[currentTextIndex]}</span>
            </HomeSectionTitle>
          </HomeSectionContentWrapper>
        </HomeSectionWrapper>
      </HomeSectionContainer>
    </>
  );
};

export default Home;
