import PropTypes from 'prop-types';
import SliderCard from '../SliderCard/SliderCard.jsx';
import { SlideWrap } from './SliderGallery.styled.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderGallery = ({
  currentSlide,
  handleSlideChange,
  slides,
  isMobile,
}) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      emulateTouch={true}
      swipeable={true}
      selectedItem={currentSlide}
      onChange={handleSlideChange}
    >
      {!isMobile
        ? slides?.map((slide, index) => (
            <div key={index}>
              <SliderCard
                src={slide.src}
                srcRetina={slide.srcRetina}
                title={slide.title}
                shortDesc={slide.shortDesc}
                time={slide.time}
              />
            </div>
          ))
        : slides?.map((slide, index) => (
            <SlideWrap key={index}>
              {slide.map(
                ({ src, srcRetina, title, shortDesc, time }, index) => (
                  <div key={index}>
                    <SliderCard
                      src={src}
                      srcRetina={srcRetina}
                      title={title}
                      shortDesc={shortDesc}
                      time={time}
                    />
                  </div>
                )
              )}
            </SlideWrap>
          ))}
    </Carousel>
  );
};

SliderGallery.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  handleSlideChange: PropTypes.func.isRequired,
  slides: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcRetina: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        shortDesc: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })
    ),
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          srcRetina: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          shortDesc: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
        })
      )
    ),
  ]).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default SliderGallery;
