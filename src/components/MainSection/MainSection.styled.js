import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 222px;

  @media screen and (min-width: 768px) {
    padding-top: 240px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 264px;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 24px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 66px;
    /* margin-bottom: 16px; */
  }

  @media screen and (min-width: 1280px) {
    gap: 296px;
    /* margin-bottom: 12px; */
  }
`;

export const MainHeader = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 300px;
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    flex: 0 0 485px;
    font-size: 64px;
  }
`;

export const DescWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      max-width: 142px;
    }
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  line-height: 1.1875;
  letter-spacing: -0.64px;
  text-align: justify;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const InfoList = styled.ul`
  margin-top: 24px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 12px;
  }
`;

export const InfoLink = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    &:first-of-type {
      margin-right: 78px;
    }

    &:last-of-type {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    &:first-of-type {
      margin-right: auto;
    }

    &:last-of-type {
      margin-left: 152px;
    }
  }
`;
