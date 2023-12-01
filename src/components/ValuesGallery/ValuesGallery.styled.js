import styled from "@emotion/styled";

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

export const GalleryItem = styled.li`
  padding: 13px 12px 12px 12px;
  overflow: hidden;
  min-height: 197px;
  background-color: ${({ theme }) => theme.colors.secondaryBGColor};
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 33px;
  margin-bottom: 12px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fontFamilies.headersFontFamily};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  text-transform: uppercase;
`;

export const Desc = styled.p`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.56px;
`;

// align-items: stretch;
//   grid-template-areas:
//     'card1 card2 card2'
//     'card3 card4 card5'
//     'card6 card6 card7'
//     'card8 card9 card10';
