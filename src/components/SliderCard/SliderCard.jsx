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

const slides = [
  {
    src: "WindTurbine",
    srcRetina: "WindTurbineRetina",
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    shortDesc: "Wind Power for auto field irrigation",
    time: "July 2023",
  },
  {
    src: "SolarPanels",
    srcRetina: "SolarPanelsRetina",
    title: "Zhytomyr city Private Enterprise “Bosch”",
    shortDesc: "Solar Panels for industrial use",
    time: "November 2023",
  },
  {
    src: "Biotech",
    srcRetina: "BiotechRetina",
    title: "Rivne city Private Enterprise “Biotech”",
    shortDesc: "Thermal modules",
    time: "October 2023",
  },
  {
    src: "HealthyFarm",
    srcRetina: "HealthyFarmRetina",
    title: "Kherson city Private Enterprise “HealthyFarm”",
    shortDesc: "Wind power",
    time: "September 2021",
  },
  {
    src: "NuclearPower",
    srcRetina: "HealthyFarmRetina",
    title: "Zaporizhia city Private Enterprise “Biotech”",
    shortDesc: "Mini nuclear stations",
    time: "May 2021",
  },
];
