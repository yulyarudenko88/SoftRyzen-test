import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
// import { Btn } from "./RoundBtn.styled.js";

const MainBtn = ({ type, children }) => {
  return (
    <button type={type}>
      {children}
      <div>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
      </div>
    </button>
  );
};

MainBtn.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MainBtn;
