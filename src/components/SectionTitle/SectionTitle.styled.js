import styled from "@emotion/styled";

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;
  text-align: ${(props) => props.textAlign};
`;