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
    label: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js logo",
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
    label: "Slack",
    src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    alt: "Slack logo",
  },
  {
    label: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma logo",
  },

  {
    label: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js logo",
  },
  {
    label: "Cypress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    alt: "Cypress logo",
  },
  {
    label: "GitLab",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    alt: "GitLab logo",
  },
  {
    label: "Bitbucket",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    alt: "Bitbucket logo",
  },
  {
    label: "Jira",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    alt: "Jira logo",
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
