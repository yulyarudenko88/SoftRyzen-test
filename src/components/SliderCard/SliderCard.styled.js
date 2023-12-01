import styled from "@emotion/styled";

export const Thumb = styled.div`
  padding: 24px 12px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;
  margin-bottom: 12px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  svg {
    stroke: ${({ theme }) => theme.colors.primaryColor};
    transition: ${({ theme }) =>
      `stroke ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};
  }

  button:hover,
  button:focus {
    svg {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
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
