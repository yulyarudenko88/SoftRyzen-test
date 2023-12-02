import styled from "@emotion/styled";

export const NetworksList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
`;

export const NetworkRef = styled.a`
  svg {
    fill: ${({ theme }) => theme.colors.whiteColor};
    stroke: ${({ theme }) => theme.colors.whiteColor};
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

export const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 40px);
  justify-content: space-between;
  flex-direction: column;
`;
