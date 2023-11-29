import styled from "@emotion/styled";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-top: ${(props) => props.padding.paddingTop};
  padding-bottom: ${(props) => props.padding.paddingBottom};
  padding-left: ${(props) => props.padding.paddingLeft};
  padding-right: ${(props) => props.padding.paddingRight};

  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  border-color: ${(props) => props.bordercolor};
  border-radius: 50%;

  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transforms.all};

  &:hover,
  &:focus {
    ${(props) => props.hoverstyles.styleFirst}: ${(props) =>
      props.hoverparams.paramFirst};
    ${(props) => props.hoverstyles.styleSecond}: ${(props) =>
      props.hoverparams.paramSecond};
    ${(props) => props.hoverstyles.styleThird}: ${(props) =>
      props.hoverparams.paramThird};
  }
`;
