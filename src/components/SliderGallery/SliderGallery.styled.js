import styled from '@emotion/styled';

export const SlideWrap = styled.div`
  display: flex;
  gap: 24px;

  div {
    flex-grow: 1;
    flex-basis: calc((100% - 24px) / 2);
  }
`;
