import { FC, useRef } from "react";
import {
  AboutSectionContainer,
  AboutSectionWrapper,
  SkillTitle,
} from "../about-section/about-section-components";
import { useGsapReveal } from "../../hooks/useGsapReveal";

type SkillItemProps = {
  label: string;
  src: string;
  alt: string;
};

const SKILLS: SkillItemProps[] = [
  {
    label: "HTML",
    src: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    alt: "HTML5 logo",
  },
  {
    label: "CSS",
    src: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    alt: "CSS3 logo",
  },
  {
    label: "JavaScript",
    src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    alt: "JavaScript logo",
  },
  {
    label: "React",
    src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React logo",
  },
  {
    label: "Redux",
    src: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    alt: "Redux logo",
  },
  {
    label: "Git",
    src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    alt: "Git logo",
  },
  {
    label: "GitHub",
    src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    alt: "GitHub logo",
  },
  {
    label: "CodePen",
    src: "https://cdn.worldvectorlogo.com/logos/codepen-icon.svg",
    alt: "CodePen logo",
  },
  {
    label: "Figma",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
    alt: "Figma logo",
  },
  {
    label: "Windows",
    src: "https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg",
    alt: "Microsoft Windows logo",
  },
  {
    label: "macOS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    alt: "Apple logo",
  },
  {
    label: "VS Code",
    src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    alt: "Visual Studio Code logo",
  },
  {
    label: "Slack",
    src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    alt: "Slack logo",
  },
];

const SkillItem: FC<SkillItemProps> = ({ label, src, alt }) => (
  <div className="about__skills-img" data-animate="fade">
    <img src={src} alt={alt} className="about__skills-img" loading="lazy" />
    <p className="about__skills-hover-text">{label}</p>
  </div>
);

type SkillSectionProps = {
  isLoading: boolean;
};

const SkillSection: FC<SkillSectionProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(containerRef, {}, !isLoading);

  return (
    <AboutSectionContainer id="skills" ref={containerRef}>
      <AboutSectionWrapper>
        <SkillTitle data-animate="fade">My Skills Are</SkillTitle>
        <div className="about__skills-content grid">
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => (
                <div className="skill-skeleton" key={index}>
                  <span className="skeleton skeleton-circle" />
                  <span className="skeleton skeleton-text short" />
                </div>
              ))
            : SKILLS.map((skill) => <SkillItem key={skill.label} {...skill} />)}
        </div>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
};

export default SkillSection;
