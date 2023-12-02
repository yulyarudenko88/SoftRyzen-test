import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { NetworksList, NetworkRef } from "./Networks.styled.js";

const Networks = ({ gap = "8px", fill = "#173D33", stroke = "#173D33" }) => {
  return (
    <NetworksList gap={gap} fill={fill} stroke={stroke}>
      <li>
        <NetworkRef href="#">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-facebook`}></use>
          </svg>
        </NetworkRef>
      </li>
      <li>
        <NetworkRef href="#">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-instagram`}></use>
          </svg>
        </NetworkRef>
      </li>
    </NetworksList>
  );
};

Networks.propTypes = {
  gap: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export default Networks;
