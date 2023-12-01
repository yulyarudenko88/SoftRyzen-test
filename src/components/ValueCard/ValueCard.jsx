// import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
// import {  } from "./ValueCard.styled.js";

const ValueCard = () => {
  return (
    <li>
      <div>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-maximize-circle`}></use>
        </svg>
        <h3>Openness</h3>
      </div>
      <p>to the world, people, new ideas and projects</p>
    </li>
  );
};


export default ValueCard;
