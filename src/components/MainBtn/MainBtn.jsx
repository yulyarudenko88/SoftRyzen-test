import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { Btn } from "./MainBtn.styled.js";

const MainBtn = ({ type, children }) => {
  return (
    <Btn type={type}>
      {children}
      <svg width={32} height={32}>
        <use href={`${sprite}#icon-arrow-right`}></use>
      </svg>
    </Btn>
  );
};

MainBtn.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MainBtn;
