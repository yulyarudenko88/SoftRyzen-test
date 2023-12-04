import styled from '@emotion/styled';

export const Item = styled.li`
  padding-top: 16px;
  border-top: ${({ theme }) => theme.borders.primaryLine};

  &:not(:last-child) {
    p {
      padding-bottom: 16px;
    }
  }

  &:last-child {
    div + p {
      padding-top: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-top: 24px;

    &:not(:last-child) {
      p {
        padding-bottom: 24px;
      }
    }

    &:last-child {
      div + p {
        padding-top: 24px;
      }
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Btn = styled.button`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  padding: 0px;
  flex: 0 0 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    flex: 0 0 28px;
    height: 28px;
  }
`;

export const Question = styled.p`
  font-size: 18px;
  line-height: 1.222;
  letter-spacing: -0.72px;
  text-align: justify;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
    letter-spacing: -0.96px;
  }
`;

export const Answer = styled.p`
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: -0.56px;
  text-align: justify;
  padding-left: 24px;

  @media screen and (min-width: 1280px) {
    padding-left: 44px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.1875;
    letter-spacing: -0.64px;
    padding-left: 52px;
  }
`;
