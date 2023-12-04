import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 39px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  h2 {
    flex: 0 0 264px;
  }

  @media screen and (min-width: 1280px) {
    h2 {
      flex: 0 0 400px;
    }
  }
`;

export const IndicatorsWrap = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 26px;
  }
  @media screen and (min-width: 768px) {
    gap: 126px;
    padding-left: 9px;
    border-left: ${({ theme }) => theme.borders.primaryLine};
  }

  @media screen and (min-width: 1280px) {
    gap: 193px;
    padding-left: 161px;
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

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;
