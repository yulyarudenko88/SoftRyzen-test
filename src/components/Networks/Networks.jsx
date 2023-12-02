import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { NetworksList, NetworkRef } from "./Networks.styled.js";

const Networks = ({ gap = "8px", justifyContent='flex-start' }) => {
  return (
    <NetworksList gap={gap} justifyContent={justifyContent}>
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
  justifyContent: PropTypes.string,
};

export default Networks;
