import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  button {
    svg {
      stroke: ${({ theme }) => theme.colors.primaryColor};
      transition: ${({ theme }) => theme.transforms.all};
    }

    &:focus,
    &:hover {
      svg {
        stroke: ${({ theme }) => theme.colors.accentColor};
      }
    }
  }
`;

export const InfoList = styled.ul`
  margin-top: 24px;
`;

export const InfoLink = styled.li`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
