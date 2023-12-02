import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { Btn } from "./SecondaryBtn.styled.js";

const SecondaryBtn = ({ children }) => {
  return (
    <Btn type="button">
      {children}
      <svg width={14} height={14}>
        <use href={`${sprite}#icon-go-contact`}></use>
      </svg>
    </Btn>
  );
};

SecondaryBtn.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SecondaryBtn;
