import PropTypes from "prop-types";
import RoundBtn from "../RoundBtn/RoundBtn.jsx";
// import { Title } from "./SliderCard.styled";
import sprite from "../../assets/images/sprite.svg";

import WindTurbine from "../../assets/images/CasesSection/wind-turbines.jpg";
import WindTurbineRetina from "../../assets/images/CasesSection/wind-turbines@2x.jpg";

const SliderCard = ({
  src = { WindTurbine },
  srcRetina = { WindTurbineRetina },
  title,
  shortDesc,
  time,
}) => {
  return (
    <li>
      <img src={src} srcSet={`${src}, ${srcRetina} 2x`} alt={title} />
      <div>
        <div>
          <h3>{title}</h3>
          <RoundBtn
            type="button"
            SvgWidth={16}
            SvgHeight={16}
            spritePath={sprite}
            iconName="icon-menu"
          />
        </div>
        <div>
          <p>{shortDesc}</p>
          <p>{time}</p>
        </div>
      </div>
    </li>
  );
};

SliderCard.propTypes = {
  src: PropTypes.string.isRequired,
  srcRetina: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default SliderCard;

