import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 36px;
`;

export const ContactsList = styled.ul`
  margin-top: 24px;
  margin-bottom:36px;

  li:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.1875;
  letter-spacing: -0.64px;
  text-align: justify;
  margin-bottom:8px;
`;

export const TelList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const TelNumber = styled.li`
display: flex;
align-items: center;
gap: 8px;

a {
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.8px;
}
`;

export const ContactWrap = styled.div`
display: flex;
align-items: center;
gap: 8px;

a {
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.8px;
}
`;