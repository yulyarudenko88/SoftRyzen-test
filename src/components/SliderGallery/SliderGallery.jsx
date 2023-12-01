import { slides } from "../../assets/data/sliders.js";
import SliderCard from "../SliderCard/SliderCard.jsx";

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
