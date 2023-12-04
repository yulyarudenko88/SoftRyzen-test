import styled from "@emotion/styled";
import { Link } from 'react-scroll';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.backdropColor};
  backdrop-filter: blur(2px);

  opacity: 1;
  transition: ${({ theme }) => theme.transforms.all};

  &.is-hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 36px;
  right: 20px;
  width: 320px;
  height: calc(100% - 36px * 2);
  padding: 24px;

  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.mobileMenuBGColor};
  backdrop-filter: blur(12.5px);
`;

export const BtnClose = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 0px 0px 4px 0px;
  background-color: transparent;
  border: none;
  border-bottom: ${({ theme }) => theme.borders.secondaryLine};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: inherit;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.64px;

  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) =>
    `color ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};

  svg {
    stroke: ${({ theme }) => theme.colors.whiteColor};
    transition: ${({ theme }) =>
      `stroke ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};

    svg {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const NavMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const NavMenuRef = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.96px;
  cursor: pointer;

  transition: ${({ theme }) =>
    `color ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};

  svg {
    stroke: ${({ theme }) => theme.colors.secondaryTextColor};
    margin-left: 8px;
    transition: ${({ theme }) =>
      `stroke ${theme.transforms.transitionDuration} ${theme.transforms.timingFunction}`};
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.whiteColor};

    svg {
      stroke: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.accentColor};

    svg {
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SocialMediaRef = styled.a`
  svg {
    fill: ${({ theme }) => theme.colors.whiteColor};
    stroke: ${({ theme }) => theme.colors.whiteColor};
    transition: ${({ theme }) => theme.transforms.all};
  }

  &:focus,
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.accentColor};
      stroke: ${({ theme }) => theme.colors.accentColor};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 40px);
  justify-content: space-between;
  flex-direction: column;
`;
