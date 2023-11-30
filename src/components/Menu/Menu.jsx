import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import {
  Backdrop,
  BurgerMenu,
  BtnClose,
  NavMenuItem,
  NavMenuRef,
  SocialMediaList,
  SocialMediaRef,
  Wrapper,
} from "./Menu.styled.js";

const Menu = ({ isOpen, onClose }) => {
  return (
    <Backdrop className={!isOpen ? "is-hidden" : ""}>
      <BurgerMenu>
        <BtnClose type="button" onClick={onClose}>
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
          close
        </BtnClose>
        <Wrapper>
          <ul>
            <NavMenuItem>
              <NavMenuRef href="#">
                <span>Main</span>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-arrow-menu`}></use>
                </svg>
              </NavMenuRef>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuRef href="#">
                <span>About</span>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-arrow-menu`}></use>
                </svg>
              </NavMenuRef>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuRef href="#">
                <span>Cases</span>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-arrow-menu`}></use>
                </svg>
              </NavMenuRef>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuRef href="#">
                <span>FAQ</span>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-arrow-menu`}></use>
                </svg>
              </NavMenuRef>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuRef href="#">
                <span>Contact Us</span>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-arrow-menu`}></use>
                </svg>
              </NavMenuRef>
            </NavMenuItem>
          </ul>
          <SocialMediaList>
            <li>
              <SocialMediaRef href="#">
                <svg width={24} height={24}>
                  <use href={`${sprite}#icon-facebook`}></use>
                </svg>
              </SocialMediaRef>
            </li>
            <li>
              <SocialMediaRef href="#">
                <svg width={24} height={24}>
                  <use href={`${sprite}#icon-instagram`}></use>
                </svg>
              </SocialMediaRef>
            </li>
          </SocialMediaList>
        </Wrapper>
      </BurgerMenu>
    </Backdrop>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Menu;
