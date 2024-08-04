import React from "react";
import {
  AboutMeContent,
  AboutMeContentContainer,
  AboutMyRoleContainer,
  AboutSectionContainer,
  AboutSectionContent,
  AboutSectionWrapper,
  MyProfileContainer,
  Title,
} from "./about-section-components";

export default function AboutSection() {
  return (
    <AboutSectionContainer id="about">
      <AboutSectionWrapper>
        <Title>About me</Title>
        <AboutSectionContent>
          <MyProfileContainer>
            <img
              src="https://res.cloudinary.com/dsr8vo48i/image/upload/v1709398244/IMG_20240302_221324_stkz2b.jpg"
              alt=""
            />
          </MyProfileContainer>

          <AboutMeContentContainer>
            <AboutMyRoleContainer>
              I am Devendra and I'm a
              <span className="typing-2"> Frontend Developer</span>
            </AboutMyRoleContainer>

            <AboutMeContent>
              Having Experience in developing web pages using HTML/HTML5,
              CSS/CSS3, JavaScript, JSON, React JS, Redux, Knowledge on
              customizing CSS framework like Bootstrap.Knowledge in React JS
              framework. Familiar with creating Custom Reusable React Components
              and experience in React Life cycle hooks, Forms, Events, Keys,
              Router, Lazy loading, Higher Oder Component(HOC) Knowledge on
              front-end development with back-end system integration. Expertise
              in using IDE tools such as Visual Studio Code.
            </AboutMeContent>
          </AboutMeContentContainer>
        </AboutSectionContent>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}
