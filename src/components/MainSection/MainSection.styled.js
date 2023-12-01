import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 222px;
`;

export const Wrapper = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};
`;
export const MainHeader = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;

  margin-bottom: 24px;
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  letter-spacing: -0.64px;
  text-align: justify;

  margin-bottom: 24px;
`;

export const AddressList = styled.ul`
  text-align: center;

  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AddressLink = styled.a`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  letter-spacing: -0.64px;

  margin-bottom: 24px;
`;
