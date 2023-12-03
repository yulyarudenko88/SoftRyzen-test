import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    align-items: stretch;
    grid-template-areas:
      'card1 card2 card3 card3'
      'card4 card4 card5 card6';
  }
`;

export const GalleryItem = styled.li`
  padding: 13px 12px 12px 12px;
  overflow: hidden;
  min-height: 197px;
  background-color: ${({ theme }) => theme.colors.secondaryBGColor};

  @media screen and (min-width: 768px) {
    padding: 12px;

    &:nth-of-type(1) {
      grid-area: card1;
    }
    &:nth-of-type(2) {
      grid-area: card2;
    }
    &:nth-of-type(3) {
      grid-area: card3;
      padding: 0px;
    }
    &:nth-of-type(4) {
      grid-area: card4;
      padding: 0px;
    }
    &:nth-of-type(5) {
      grid-area: card5;
    }
    &:nth-of-type(6) {
      grid-area: card6;
    }

    picture {
      display: flex;
      height: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 48px 24px;
    min-height: 339px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  margin-bottom: 12px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  @media screen and (min-width: 768px) {
    padding-bottom: 51px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 94px;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.1875;
  }
`;
