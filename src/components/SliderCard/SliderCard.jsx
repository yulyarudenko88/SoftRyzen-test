import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import RoundBtn from '../RoundBtn/RoundBtn.jsx';
import {
  Thumb,
  TitleWrap,
  Title,
  DescWrap,
  StyledLink,
} from './SliderCard.styled';
import sprite from '../../assets/images/sprite.svg';

const SliderCard = ({ src, srcRetina, title, shortDesc, time }) => {
  const location = useLocation();

  return (
    <li>
      <StyledLink to="/" state={location}>
        <img src={src} srcSet={`${src}, ${srcRetina} 2x`} alt={title} />
        <Thumb>
          <TitleWrap>
            <Title>{title}</Title>
            <RoundBtn
              type="button"
              SvgWidth={28}
              SvgHeight={28}
              spritePath={sprite}
              iconName="icon-arrow-card"
              width="60px"
              height="60px"
              padding={{
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
              bgColor="#97D28B"
              hoverStyles={{
                styleFirst: 'background-color ',
              }}
              hoverParams={{ paramFirst: '#173D33' }}
            />
          </TitleWrap>
          <DescWrap>
            <p>{shortDesc}</p>
            <p>{time}</p>
          </DescWrap>
        </Thumb>
      </StyledLink>
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
