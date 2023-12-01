import styled from "@emotion/styled";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 4px 4px 4px 16px;
  background-color: transparent;
  border: ${({ theme }) => theme.borders.primaryLine};
  border-radius: 500px;;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: inherit;
  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.64px;

  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transforms.all};
  
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

