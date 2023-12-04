import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Img = styled.img`
  width: 100%;
`;

export const Thumb = styled.div`
  padding: 24px 12px;
  background-color: ${({ theme }) => theme.colors.secondaryBGColor};

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;
  margin-bottom: 12px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 36px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h3`
  flex: 0 0 175px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.222;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
    flex: 0 0 230px;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.8px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    flex: 0 0 360px;
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const DescWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    line-height: 1.167;
    letter-spacing: -0.48px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.214;
      letter-spacing: -0.56px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 16px;
      line-height: 1.1875;
      letter-spacing: -0.64px;
    }
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
