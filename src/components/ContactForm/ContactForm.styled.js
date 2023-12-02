import styled from "@emotion/styled";

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
