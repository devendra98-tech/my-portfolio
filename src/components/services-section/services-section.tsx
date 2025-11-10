import { FC, useRef } from "react";
import {
  CardTitle,
  ServicesCard,
  ServicesCardContent,
  ServicesSectionContainer,
  ServicesSectionContent,
  ServicesSectionWrapper,
} from "./services-section-components";
import { SkillTitle } from "../about-section/about-section-components";
import { useGsapReveal } from "../../hooks/useGsapReveal";

type ServiceItemProps = {
  icon: string;
  title: string;
  description: string;
};

const SERVICES: ServiceItemProps[] = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    description:
      "I build fast, interactive websites using React.js, HTML, CSS, and JavaScript.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-friendly interfaces to enhance user experience.",
  },
  {
    icon: "fas fa-store",
    title: "Shopify Development",
    description:
      "Developing and customizing Shopify stores to meet your e-commerce needs.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "PWA Development",
    description:
      "Building Progressive Web Apps that provide a native app experience on the web.",
  },
  {
    icon: "fas fa-server",
    title: "Backend Integration",
    description:
      "Integrating backend services and APIs to create dynamic and robust applications.",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Support",
    description:
      "Providing round-the-clock support to ensure your website or app runs smoothly.",
  },
];

const ServiceItem: FC<ServiceItemProps> = ({ icon, title, description }) => (
  <ServicesCard>
    <ServicesCardContent data-animate="fade">
      <i className={icon} aria-hidden="true"></i>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>
    </ServicesCardContent>
  </ServicesCard>
);

type ServicesSectionProps = {
  isLoading: boolean;
};

const ServicesSection: FC<ServicesSectionProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(containerRef, {}, !isLoading);

  return (
    <ServicesSectionContainer id="services" ref={containerRef}>
      <ServicesSectionWrapper>
        <SkillTitle data-animate="fade">My Services</SkillTitle>

        <ServicesSectionContent>
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <ServicesCard key={index}>
                  <ServicesCardContent>
                    <span className="skeleton skeleton-icon" />
                    <span className="skeleton skeleton-text" />
                    <span className="skeleton skeleton-text short" />
                  </ServicesCardContent>
                </ServicesCard>
              ))
            : SERVICES.map((service) => (
                <ServiceItem key={service.title} {...service} />
              ))}
        </ServicesSectionContent>
      </ServicesSectionWrapper>
    </ServicesSectionContainer>
  );
};

export default ServicesSection;
