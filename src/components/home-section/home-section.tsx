import React from "react";
import {
  HomeSectionContainer,
  HomeSectionContentWrapper,
  HomeSectionPrimaryTitle,
  HomeSectionSecondaryTitle,
  HomeSectionTitle,
  HomeSectionWrapper,
} from "./home-section-components";
export default function Home() {
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
              And I'm a <span className="typing">Frontend Developer </span>
            </HomeSectionTitle>
          </HomeSectionContentWrapper>
        </HomeSectionWrapper>
      </HomeSectionContainer>
    </>
  );
}
