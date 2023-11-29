import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBGColor};
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
