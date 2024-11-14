import React from "react";
import {
  AboutSectionContainer,
  AboutSectionWrapper,
  SkillTitle,
} from "../about-section/about-section-components";
import WindowsIcon from "../../assets/icons/windows-icon.svg";
export default function SkillSection() {
  return (
    <AboutSectionContainer id="skills">
      <AboutSectionWrapper>
        <SkillTitle>My Skills Are</SkillTitle>
        <div className="about__skills-content grid">
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              className="about__skills-img"
              alt="HTML5"
            />
            <p className="about__skills-hover-text">HTML</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="imageCSS"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">CSS</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="imageJavaScript"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">JavaScript</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="imageReact"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">React</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/redux.svg"
              alt="imageRedux"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">Redux</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
              alt="imageGit"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">Git</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
              alt="imageGitHub"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">GitHub</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg"
              alt="imageCodePen"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">CodePen</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
              alt="imageFigma"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">Figma</p>
          </div>
          <div className="about__skills-img">
            <img
              src={WindowsIcon}
              alt="imageWindows"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">Windows</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/apple-14.svg"
              alt="imagemacOs"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">macOs</p>
          </div>
          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
              alt="imageVSCode"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">VSCode</p>
          </div>

          <div className="about__skills-img">
            <img
              src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
              alt="imageSlack"
              className="about__skills-img"
            />
            <p className="about__skills-hover-text">Slack</p>
          </div>
        </div>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
}
