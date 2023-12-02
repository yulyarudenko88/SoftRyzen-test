import styled from "@emotion/styled";

export const NetworksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
`;

export const NetworkRef = styled.a`
  svg {
    fill: ${({ theme }) => theme.colors.primaryColor};
    stroke: ${({ theme }) => theme.colors.primaryColor};
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
