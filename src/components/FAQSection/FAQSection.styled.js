import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 36px;

  button {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const Question = styled.p`
  font-size: 18px;
  line-height: 1.222;
  letter-spacing: -0.72px;
  text-align: center;
  margin-bottom: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: -0.96px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 185px;
  }
`;

export const InfoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 0 0 342px;
    justify-content: space-between;
    height: ${prop => {
      const height = prop.infoWrapperHeight;
      return `${height}px`;
    }};
  }

  @media screen and (min-width: 1280px) {
    flex: 0 0 459px;
    align-items: flex-start;
  }
`;
