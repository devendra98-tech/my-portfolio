import styled from "styled-components";
export const AboutSectionContainer = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 100px 0 40px;
  background-color: var(--surface-color);
  transition: background-color 0.3s ease;
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
  color: var(--text-color);
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 180px;
    height: 3px;
    background: var(--divider-color);
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
    color: var(--accent-color);
    padding: 0 5px;
    background: var(--surface-color);
    transform: translateX(-50%);
  }
`;
export const AboutSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  @media (max-width: 947px) {
    gap: 0;
  }
`;
export const MyProfileContainer = styled.div`
  height: fit-content;
  width: 400px;
  > img {
    height: 100%;
    width: 100%;
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
    width: 350px;
    height: fit-content;
    > img {
      height: 100%;
      width: 100%;
    }
  }
`;
export const AboutMeContentContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 18px;
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
    color: #00a01d;
  }
`;
export const AboutMeContent = styled.p`
  text-align: left;
  line-height: 1.75;
  color: var(--text-color);
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
  color: var(--text-color);
`;
