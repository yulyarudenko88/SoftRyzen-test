import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  button {
    svg {
      stroke: ${({ theme }) => theme.colors.primaryColor};
      transition: ${({ theme }) => theme.transforms.all};
    }

    &:focus,
    &:hover {
      svg {
        stroke: ${({ theme }) => theme.colors.accentColor};
      }
    }
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 16px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 0 342px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    flex: 0 0 427px;
  }
`;

export const InfoList = styled.ul`
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const InfoLink = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
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
      margin-left: 137px;
    }
  }
`;
