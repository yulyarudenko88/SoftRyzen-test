import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 36px;

  /* @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 40px;
  } */
`;

export const TitleWrap = styled.div`
  display: flex;
  h2 {
    flex: 0 0 264px;
  }
  /* @media screen and (min-width: 768px) {
    padding: 0px 170px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0px 375px;
  } */
`;

export const IndicatorsWrap = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 24px;
    margin-bottom: 19px;
  }
`;

export const Indicators = styled.p`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.214;
  letter-spacing: -1.12px;

  span {
    color: ${({ theme }) => theme.colors.indicatorsColor};
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 7px;

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
