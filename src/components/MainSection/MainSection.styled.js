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
  margin-bottom: 24px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 66px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 296px;
    margin-bottom: 12px;
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

export const AddressList = styled.ul`
  @media screen and (max-width: 767px) {
    text-align: center;

    li:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const AddressLink = styled.a`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  letter-spacing: -0.64px;

  margin-bottom: 24px;
`;
