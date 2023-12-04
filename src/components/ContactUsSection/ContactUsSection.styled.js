import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;
export const ContactsList = styled.ul`
  @media screen and (max-width: 767px) {
    margin-top: 24px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 250px;
  }

  @media screen and (min-width: 1280px) {
    flex: 0 0 470px;
  }
`;

export const Contact = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 1279px) {
    &:last-child {
      ul {
        padding-left: 12px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
    &:last-child {
      ul {
        gap: 8px;
      }
    }
  }
`;

export const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;
  text-align: justify;
  margin-bottom: 8px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const TelList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const TelNumber = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 8px;

  a {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.8px;

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      letter-spacing: -0.96px;
    }
  }

  svg {
    stroke: ${({ theme }) => theme.colors.primaryColor};
    transition: ${({ theme }) => theme.transforms.all};
  }

  a:hover + svg,
  a:focus + svg {
    stroke: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 8px;

  a {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.8px;

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      letter-spacing: -0.96px;
    }
  }

  svg {
    stroke: ${({ theme }) => theme.colors.primaryColor};
    transition: ${({ theme }) => theme.transforms.all};
  }

  address + svg {
    flex: 0 0 24px;
  }

  a:hover + svg,
  a:hover + svg,
  address:hover + svg,
  address:hover + svg {
    stroke: ${({ theme }) => theme.colors.accentColor};
  }
`;
