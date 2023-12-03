import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;
  text-align: ${props => props.textAlign};

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
