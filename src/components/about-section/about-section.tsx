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
              src="https://res.cloudinary.com/dsjin99km/image/upload/v1723194116/developer_hkd2pt.png"
              alt=""
            />
          </MyProfileContainer>

          <AboutMeContentContainer>
            <AboutMyRoleContainer>I’m Devendra,</AboutMyRoleContainer>

            <AboutMeContent>
              a passionate Frontend Developer with hands-on experience in
              building modern, responsive web applications. I specialize in
              HTML/HTML5, CSS/CSS3, JavaScript, and JSON, with advanced
              expertise in React.js and Redux. My experience includes
              customizing CSS frameworks like Bootstrap to create seamless and
              dynamic user interfaces. I am skilled in creating reusable React
              components and am proficient with React’s lifecycle hooks, forms,
              events, routing, lazy loading, and Higher-Order Components (HOCs).
              Additionally, I have experience integrating frontend solutions
              with backend systems. I leverage development tools like Visual
              Studio Code to ensure efficient and productive coding practices.
            </AboutMeContent>
          </AboutMeContentContainer>
        </AboutSectionContent>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}
