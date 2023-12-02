import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};
`;

export const ContactsList = styled.ul`
  margin-top: 24px;
  margin-bottom: 36px;
`;

export const Contact = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:last-child {
    ul {
      padding-left: 14px;
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

export const Form = styled.form`
  padding: 36px 12px;
  background-color: ${({ theme }) => theme.colors.secondaryBGColor};

  button {
    margin-top: 16px;
    margin-left: auto;
  }
`;

export const FildWrap = styled.div`
  margin-bottom: 28px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  line-height: 1.1875;
  letter-spacing: -0.64px;
  transition: ${({ theme }) =>
    `color ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};

  /* &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentColor};
  } */
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  line-height: 1.1875;
  letter-spacing: -0.72px;
  outline: none;
  border: none;
  padding: 0px 0px 8px 0px;
  width: 100%;
  background-color: transparent;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  &::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.placeholderColor};
    line-height: 1.22;
    letter-spacing: -0.72px;
  }

  &:-webkit-autofill {
    transition: background-color 6000s;
  }
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  line-height: 1.1875;
  letter-spacing: -0.72px;
  outline: none;
  border: none;
  padding: 0px 0px 8px 0px;
  width: 100%;
  height: 147px;
  resize: none;
  background-color: transparent;
  border-bottom: ${({ theme }) => theme.borders.primaryLine};

  &::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.placeholderColor};
    line-height: 1.22;
    letter-spacing: -0.72px;
  }

  &:-webkit-autofill {
    transition: background-color 6000s;
  }
`;
