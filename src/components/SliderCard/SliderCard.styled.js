import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Thumb = styled.div`
  padding: 24px 12px;
  background-color: ${({ theme }) => theme.colors.secondaryBGColor};
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;
  margin-bottom: 12px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};
`;

export const Title = styled.h3`
  max-width: 175px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.222;
  letter-spacing: -0.72px;
`;

export const DescWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    line-height: 1.167;
    letter-spacing: -0.48px;
  }
`;

export const StyledLink = styled(Link)`
  svg {
    stroke: ${({ theme }) => theme.colors.primaryColor};
    transition: ${({ theme }) =>
      `stroke ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};
  }

  &:hover,
  &:focus {
    button,
    button {
      svg {
        stroke: ${({ theme }) => theme.colors.accentColor};
      }
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;
