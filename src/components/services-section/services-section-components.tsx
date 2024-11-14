import styled from "styled-components";
export const ServicesSectionContainer = styled.div`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

export const ServicesSectionWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
  span {
    color: #00a01d;
  }
`;

export const Subtitle = styled.h4`
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  text-align: center;
  z-index: 1;
  ::before {
    background: #00a01d;
    bottom: 0;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -25px;
    position: absolute;
    width: 50px;
  }
`;

export const ServicesSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export const ServicesCard = styled.div`
  background: #ffffff;
  /* border-left: 2px solid #00a01d; */
  box-shadow: 0 0 10px #cccccc;
  overflow: hidden;
  padding: 30px;
  position: relative;
  z-index: 1;
  flex: 0 1 calc(29.7% - 20px);
  margin: 10px;
  text-align: center;
  transition: all 0.35s ease-in-out;
  border-radius: 8px;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 0 1 calc(45% - 20px); /* Adjust percentage as needed */
  }

  @media (max-width: 947px) {
    flex: 0 1 100%; /* Each card takes up full width */
    margin: 10px 32px;
  }
  &:hover::after {
    left: 0;
  }

  &:hover i,
  &:hover h4,
  &:hover p {
    color: #ffffff !important;
  }

  i {
    color: #00303f;
    display: inline-block;
    font-size: 60px;
    margin-bottom: 20px;
    transition: all 0.35s ease-in-out;
  }

  h4 {
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 15px;
    transition: all 0.35s ease-in-out;
  }

  p {
    margin: 0;
    transition: all 0.35s ease-in-out;
  }

  &::after {
    background: #00303f;
    content: "";
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    transition: all 0.35s ease-in-out;
    width: 100%;
    z-index: -1;
  }
`;

export const ServicesCardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
