import styled from "styled-components";
export const HomeSectionContainer = styled.section`
  display: flex;
  background: url("https://res.cloudinary.com/dsr8vo48i/image/upload/v1709389925/software-developer-6521720_1920_innlc4.jpg")
    no-repeat center;
  height: 100vh;
  color: #fff;
  min-height: 500px;
  background-size: cover;
  background-attachment: fixed;
  font-family: "Ubuntu", sans-serif;
`;
export const HomeSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
  @media (max-width: 690px) {
    padding: 0 23px;
  }
`;
export const HomeSectionContentWrapper = styled.div``;
export const HomeSectionPrimaryTitle = styled.div`
  font-size: 27px;
`;
export const HomeSectionSecondaryTitle = styled.div`
  font-size: 75px;
  font-weight: 600;
  margin-left: -3px;
  > span {
    color: crimson;
    transition: all 0.3s ease;
  }
  @media (max-width: 690px) {
    font-size: 60px;
  }
`;
export const HomeSectionTitle = styled.div`
  font-size: 40px;
  margin: 5px 0;
  > span {
    color: crimson;
    font-weight: 500;
  }
  @media (max-width: 690px) {
    font-size: 32px;
  }
`;
