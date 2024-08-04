import styled from "styled-components";
export const AboutSectionContainer = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 100px 0 40px;
  background-color: #f9f9f9;
`;
export const AboutSectionWrapper = styled.div`
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
    background: #111;
    transform: translateX(-50%);
  }
  &::after {
    content: "who I am";
  }
  &::after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
  }
`;
export const AboutSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const MyProfileContainer = styled.div`
  > img {
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
  }
  @media (max-width: 947px) {
    display: flex;
    justify-content: center;
    margin: 0 auto 60px;
    width: 100%;
  }
  @media (max-width: 1104px) {
    > img {
      height: 350px;
      width: 350px;
    }
  }
`;
export const AboutMeContentContainer = styled.div`
  width: 55%;
  @media (max-width: 947px) {
    flex: 100% 1;
    width: 100%;
  }
`;
export const AboutMyRoleContainer = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 19px;
  }
  > span {
    color: crimson;
  }
`;
export const AboutMeContent = styled.p`
  text-align: justify;
`;
export const SkillTitle = styled.h2`
  position: relative;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 60px;
  padding-bottom: 20px;
  padding-top: 18px;
  font-family: "Ubuntu", sans-serif;
`;
