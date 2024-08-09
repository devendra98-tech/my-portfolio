import React, { useEffect, useState } from "react";
import {
  HomeSectionContainer,
  HomeSectionContentWrapper,
  HomeSectionPrimaryTitle,
  HomeSectionSecondaryTitle,
  HomeSectionTitle,
  HomeSectionWrapper,
} from "./home-section-components";
const texts = [
  "Frontend Developer",
  "Web Developer",
  "Shopify Developer",
  "React Developer",
];
export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <HomeSectionContainer id="home">
        <HomeSectionWrapper>
          <HomeSectionContentWrapper>
            <HomeSectionPrimaryTitle>Hello, This is</HomeSectionPrimaryTitle>
            <HomeSectionSecondaryTitle>
              <span>D</span>evendra <span>G</span>olakoti
            </HomeSectionSecondaryTitle>
            <HomeSectionTitle>
              And I'm a{" "}
              <span className="typing">{texts[currentTextIndex]}</span>
            </HomeSectionTitle>
          </HomeSectionContentWrapper>
        </HomeSectionWrapper>
      </HomeSectionContainer>
    </>
  );
}
