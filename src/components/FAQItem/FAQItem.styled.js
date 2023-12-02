import styled from "@emotion/styled";

export const Item = styled.li`
  padding-top: 16px;
  border-top: ${({ theme }) => theme.borders.primaryLine};

  &:not(:last-child) {
    div {
      margin-bottom: 16px;
    }

    p {
      padding-bottom: 16px;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
`;

export const Question = styled.p`
  font-size: 18px;
  line-height: 1.222;
  letter-spacing: -0.72px;
  text-align: justify;
`;

export const Answer = styled.p`
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: -0.56px;
  text-align: justify;
  padding-left: 24px;
`;
