import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 36px;
`;

export const Picture = styled.picture`
  display: block;
  margin-bottom: 36px;
`;

export const Desc = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;
  text-align: justify;

  margin-top: 24px;
  margin-bottom: 36px;
`;
