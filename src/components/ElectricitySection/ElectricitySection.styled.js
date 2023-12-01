import styled from "@emotion/styled";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";

export const Section = styled.section`
  padding-top: 36px;
`;

export const Title = styled(SectionTitle)`
  text-align: center;
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

  span {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1;
    text-transform: capitalize;
  }

  &::before {
    content: "";
    position: absolute;
    top: 24px;
    left: 50%;
    z-index: -5;
    width: 1px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
