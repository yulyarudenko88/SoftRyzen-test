import styled from "@emotion/styled";

export const NetworksList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
`;

export const NetworkRef = styled.a`
  svg {
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
    transition: ${({ theme }) => theme.transforms.all};
  }

  &:focus,
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.accentColor};
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
