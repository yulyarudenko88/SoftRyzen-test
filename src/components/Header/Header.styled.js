import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme, isAtTop }) =>
    isAtTop ? 'transparent' : theme.colors.headerBGColor};
  padding-top: 36px;
  padding-bottom: 36px;
  z-index: 100;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
