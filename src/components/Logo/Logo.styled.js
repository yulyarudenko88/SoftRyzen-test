import styled from "@emotion/styled";

export const Wrap = styled.a`
  display: flex;
  height: 40px;
  align-items: flex-start;
`;

export const Svg = styled.svg`
  padding-top: 14px;
`;

export const Ecosolution = styled.svg`
  margin-left: 4px;
  margin-right: 4px;
  fill: ${({ theme }) => theme.colors.primaryTextColor};
  transition: ${({ theme }) =>
    `fill ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.accentColor};
  }
`;
