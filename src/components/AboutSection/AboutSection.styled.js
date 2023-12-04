import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 36px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 40px;
  }
`;

export const Picture = styled.picture`
  display: block;
  margin-bottom: 36px;

  img{
    width: 100%;
  }
  
  @media screen and (min-width: 768px) {
    margin-bottom: 101px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 123px;
  }
`;

export const InfoWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 82px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    gap: 254px;
    margin-bottom: 122px;
  }
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;
  text-align: justify;

  @media screen and (max-width: 767px) {
    margin-top: 24px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 353px;
    padding-left: 11px;
    border-left: ${({ theme }) => theme.borders.primaryLine};
  }

  @media screen and (min-width: 1280px) {
    flex: 0 0 620px;
    padding-left: 161px;
  }
`;
