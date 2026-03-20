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
    `Hey there! I’m Devendra, a passionate Frontend Developer dedicated to transforming ideas into elegant, responsive, and high-performing web experiences.

I specialize in React.js, Next.js, and Redux, building modern and scalable applications that are both visually appealing and performance-driven. With a strong foundation in HTML5, CSS3, JavaScript, and JSON, I bring designs to life with clean, efficient, and maintainable code.

My focus is on creating reusable and optimized components, while leveraging Next.js features like Server-Side Rendering (SSR) and Static Site Generation (SSG) to improve performance and SEO.

I have experience working with frameworks like Tailwind CSS, Bootstrap, and PrimeFlex to build responsive, consistent, and pixel-perfect user interfaces.

Beyond development, I enjoy integrating front-end applications with back-end systems, ensuring seamless and intuitive user experiences.
I am passionate about writing maintainable, high-performance code, continuously learning new technologies, and improving my skills to stay up-to-date in the ever-evolving web development landscape.`,
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
                    delay={index * 0.06}
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
