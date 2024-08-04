import styled from "styled-components";
export const ServicesSectionContainer = styled.div`
  color: #fff;
  background: #111;
  padding: 100px 0;
`;
export const ServicesSectionWrapper = styled.div`
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
  @media (max-width: 690px) {
    padding: 0 23px;
  }
  @media (max-width: 947px) {
    max-width: 930px;
  }
  @media (max-width: 991px) {
    padding: 0 50px;
  }
`;
export const Title = styled.h2`
  position: relative;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 60px;
  padding-bottom: 20px;
  font-family: "Ubuntu", sans-serif;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #fff;
    transform: translateX(-50%);
  }
  &::after {
    background: #111;
    content: "What I provide";
  }
  &::after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    transform: translateX(-50%);
  }
`;
export const ServicesSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const ServicesCard = styled.div`
  width: calc(33% - 20px);
  background: #222;
  text-align: center;
  border-radius: 6px;
  padding: 50px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (max-width: 690px) {
    width: 100%;
  }

  @media (max-width: 947px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
`;
export const ServicesCardContent = styled.div`
  transition: all 0.3s ease;
  > i {
    font-size: 50px;
    color: crimson;
    transition: color 0.3s ease;
  }
`;
export const CardTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0 7px;
`;
