import React from "react";
import {
  CardTitle,
  ServicesCard,
  ServicesCardContent,
  ServicesSectionContainer,
  ServicesSectionContent,
  ServicesSectionWrapper,
} from "./services-section-components";
import { SkillTitle } from "../about-section/about-section-components";

export default function ServicesSection() {
  return (
    <>
      <ServicesSectionContainer id="services">
        <ServicesSectionWrapper>
          <SkillTitle>My Services </SkillTitle>

          <ServicesSectionContent>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-code"></i>
                <CardTitle>Web Development</CardTitle>
                <p>
                  I build fast, interactive websites using React.js, HTML, CSS,
                  and JavaScript.
                </p>
              </ServicesCardContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-paint-brush"></i>
                <CardTitle>UI/UX Design</CardTitle>
                <p>
                  Creating visually appealing and user-friendly interfaces to
                  enhance user experience.
                </p>
              </ServicesCardContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-store"></i>
                <CardTitle>Shopify Development</CardTitle>
                <p>
                  Developing and customizing Shopify stores to meet your
                  e-commerce needs.
                </p>
              </ServicesCardContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-mobile-alt"></i>
                <CardTitle>PWA Development</CardTitle>
                <p>
                  Building Progressive Web Apps that provide a native app
                  experience on the web.
                </p>
              </ServicesCardContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-server"></i>
                <CardTitle>Backend Integration</CardTitle>
                <p>
                  Integrating backend services and APIs to create dynamic and
                  robust applications.
                </p>
              </ServicesCardContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-headset"></i>
                <CardTitle>24/7 Support</CardTitle>
                <p>
                  Providing round-the-clock support to ensure your website or
                  app runs smoothly.
                </p>
              </ServicesCardContent>
            </ServicesCard>
          </ServicesSectionContent>
        </ServicesSectionWrapper>
      </ServicesSectionContainer>
    </>
  );
}
