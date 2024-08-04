import React from "react";
import {
  CardTitle,
  ServicesCard,
  ServicesCardContent,
  ServicesSectionContainer,
  ServicesSectionContent,
  ServicesSectionWrapper,
  Title,
} from "./services-section-components";

export default function ServicesSection() {
  return (
    <>
      <ServicesSectionContainer id="services">
        <ServicesSectionWrapper>
          <Title>My services</Title>
          <ServicesSectionContent>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-code"></i>
                <CardTitle>Web Development</CardTitle>
                <p>
                  Using Front-End framework, I build fast, interactive websites.
                  I use React JS and Html, CSS, JavaScript etc.
                </p>
              </ServicesCardContent>
            </ServicesCard>
            <ServicesCard>
              <ServicesCardContent>
                <i className="fas fa-code"></i>
                <CardTitle>Web Development</CardTitle>
                <p>
                  Using Front-End framework, I build fast, interactive websites.
                  I use React JS and Html, CSS, JavaScript etc.
                </p>
              </ServicesCardContent>
            </ServicesCard>
          </ServicesSectionContent>
        </ServicesSectionWrapper>
      </ServicesSectionContainer>
    </>
  );
}
