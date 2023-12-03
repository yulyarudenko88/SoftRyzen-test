import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0px 170px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0px 375px;
  }
`;

export const Counter = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accentColor};
  line-height: 1;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 96px;
  position: relative;
  z-index: -5;

  span {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1;
    text-transform: capitalize;
  }

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 50%;
    z-index: -5;
    width: 1px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 100px;
    gap: 24px;
    padding-top: 135px;

    span {
      font-size: 28px;
      line-height: 1.71;
    }

    &::before {
      height: 87px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    padding-top: 120px;

    span {
      font-size: 48px;
      line-height: 1;
    }

    &::before {
      top: 16px;
    }
  }
`;
