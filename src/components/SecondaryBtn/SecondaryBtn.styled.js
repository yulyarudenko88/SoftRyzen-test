import styled from "@emotion/styled";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 140px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 500px;
  border: none;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: inherit;
  font-size: 16px;
  line-height: 1.1875;
  letter-spacing: -0.64px;

  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transforms.all};

  svg {
    stroke: ${({ theme }) => theme.colors.primaryTextColor};
    fill: ${({ theme }) => theme.colors.primaryTextColor};
    transition: ${({ theme }) => theme.transforms.all};
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};

    svg {
      fill: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;
