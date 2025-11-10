import { FC, useRef } from "react";
import {
  AboutMeContentContainer,
  AboutSectionContainer,
  AboutSectionContent,
  AboutSectionWrapper,
  MyProfileContainer,
  Title,
} from "./about-section-components";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import AnimatedText from "./animated-text";

type AboutSectionProps = {
  isLoading: boolean;
};

const AboutSection: FC<AboutSectionProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(containerRef, {}, !isLoading);

  const paragraphs = [
    "Hey there! I’m Devendra, a passionate Frontend Developer dedicated to transforming ideas into elegant, responsive, and high-performing web experiences.",
    "I specialize in React.js, Next.js, and Redux, creating modern, scalable interfaces that are both visually stunning and lightning-fast. With a solid foundation in HTML5, CSS3, JavaScript, and JSON, I bring designs to life with creativity, precision, and clean code.",
    "My focus lies in building reusable and optimized components, leveraging Next.js features like Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance performance and SEO. I often use frameworks like Tailwind CSS, Bootstrap, and PrimeFlex to deliver consistent, responsive, and pixel-perfect designs.",
    "Beyond development, I enjoy crafting seamless user journeys by integrating front-end applications with back-end systems, ensuring every interaction feels intuitive and effortless.",
    "I believe in writing maintainable, performance-driven code, staying curious about emerging web technologies, and constantly refining my craft.",
  ];

  return (
    <AboutSectionContainer id="about" ref={containerRef}>
      <AboutSectionWrapper>
        <Title data-animate="fade">About me</Title>
        <AboutSectionContent>
          <MyProfileContainer data-animate="fade">
            {isLoading ? (
              <div className="skeleton skeleton-portrait" />
            ) : (
              <img
                src="https://res.cloudinary.com/dsjin99km/image/upload/v1723194116/developer_hkd2pt.png"
                alt="Developer sitting at a laptop"
              />
            )}
          </MyProfileContainer>

          <AboutMeContentContainer data-animate="fade">
            {isLoading ? (
              <div className="about-skeleton">
                <div className="skeleton skeleton-text skeleton-heading" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text short" />
              </div>
            ) : (
              <>
                {paragraphs.map((paragraph, index) => (
                  <AnimatedText
                    key={paragraph.slice(0, 24)}
                    text={paragraph}
                    delay={index * 0.12}
                    mode={index === 0 ? "letters" : "words"}
                  />
                ))}
              </>
            )}
          </AboutMeContentContainer>
        </AboutSectionContent>
      </AboutSectionWrapper>
    </AboutSectionContainer>
  );
};

export default AboutSection;
