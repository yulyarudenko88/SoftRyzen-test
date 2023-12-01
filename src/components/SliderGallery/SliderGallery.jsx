import { slides } from "../../assets/data/sliders.js";
import SliderCard from "../SliderCard/SliderCard.jsx";

import WindTurbine from "../../assets/images/CasesSection/wind-turbines.jpg";
import WindTurbineRetina from "../../assets/images/CasesSection/wind-turbines@2x.jpg";

const SliderGallery = () => {
  return (
    <ul>
      {slides.map(({ src, srcRetina, title, shortDesc, time }) => (
        <SliderCard
          key={title}
          src={src}
          srcRetina={srcRetina}
          title={title}
          shortDesc={shortDesc}
          time={time}
        />
      ))}
    </ul>
  );
};

export default SliderGallery;
