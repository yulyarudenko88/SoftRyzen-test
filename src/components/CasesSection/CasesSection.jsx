import PropTypes from 'prop-types';
import Container from '../Container/Container.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import SliderGallery from '../SliderGallery/SliderGallery.jsx';
import RoundBtn from '../RoundBtn/RoundBtn.jsx';
import { useState } from 'react';
import {
  Section,
  IndicatorsWrap,
  Indicators,
  ButtonsWrap,
  TitleWrap,
  Wrapper,
} from './CasesSection.styled.js';
import { slides } from '../../assets/data/sliders.js';
import sprite from '../../assets/images/sprite.svg';

const renderSliderBlocks = data => {
  const blocks = [];

  for (let i = 0; i < data.length; i += 2) {
    const firstIndex = i;
    const secondIndex = (i + 1) % data.length;

    const firstCard = data[firstIndex];
    const secondCard = data[secondIndex];
    const block = [firstCard, secondCard];
    blocks.push(block);
  }

  return blocks;
};

const CasesSection = ({ isMobile, isDesktop }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = index => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      prevSlide => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  };
  return (
    <Section id="cases">
      <Container>
        <Wrapper>
          <TitleWrap>
            <SectionTitle>Successful cases of our company</SectionTitle>
          </TitleWrap>
          <IndicatorsWrap>
            <Indicators>
              {`0${
                !isMobile
                  ? currentSlide + 1
                  : currentSlide * 2 + 2 > slides.length
                  ? 1
                  : currentSlide * 2 + 2
              }`}
              <span>{`/0${slides.length}`}</span>
            </Indicators>
            <ButtonsWrap>
              <RoundBtn
                type="button"
                onClick={goToPreviousSlide}
                SvgWidth={36}
                SvgHeight={36}
                spritePath={sprite}
                iconName="icon-arrow-left-slide"
                width={!isDesktop ? '66px' : '84px'}
                height={!isDesktop ? '66px' : '84px'}
                padding={
                  !isDesktop
                    ? {
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                      }
                    : {
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                      }
                }
                bgColor="transparent"
                border="1px solid"
                borderColor="#173D33"
                hoverStyles={{ styleFirst: 'border-color' }}
              />
              <RoundBtn
                type="button"
                onClick={goToNextSlide}
                SvgWidth={36}
                SvgHeight={36}
                spritePath={sprite}
                iconName="icon-arrow-right-slide"
                width={!isDesktop ? '66px' : '84px'}
                height={!isDesktop ? '66px' : '84px'}
                padding={
                  !isDesktop
                    ? {
                        paddingTop: '15px',
                        paddingBottom: '15px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                      }
                    : {
                        paddingTop: '24px',
                        paddingBottom: '24px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                      }
                }
                bgColor="transparent"
                border="1px solid"
                borderColor="#173D33"
                hoverStyles={{ styleFirst: 'border-color' }}
              />
            </ButtonsWrap>
          </IndicatorsWrap>
        </Wrapper>

        <SliderGallery
          currentSlide={currentSlide}
          handleSlideChange={handleSlideChange}
          slides={!isMobile ? slides : renderSliderBlocks(slides)}
          isMobile={isMobile}
        />
      </Container>
    </Section>
  );
};

CasesSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default CasesSection;
