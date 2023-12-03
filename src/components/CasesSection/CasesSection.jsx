import Container from '../Container/Container.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import SliderGallery from '../SliderGallery/SliderGallery.jsx';
import RoundBtn from '../RoundBtn/RoundBtn.jsx';
import { Section, IndicatorsWrap,Indicators,ButtonsWrap, TitleWrap } from "./CasesSection.styled.js";

import sprite from '../../assets/images/sprite.svg';

const CasesSection = () => {
  return (
    <Section>
      <Container><TitleWrap><SectionTitle>Successful cases of our company</SectionTitle></TitleWrap>        
        <IndicatorsWrap>
          <Indicators>
            01 <span>/05</span>
          </Indicators>
          <ButtonsWrap>
            <RoundBtn
              type="button"
              SvgWidth={36}
              SvgHeight={36}
              spritePath={sprite}
              iconName="icon-arrow-left-slide"
              width="66px"
              height="66px"
              padding={{
                paddingTop: '15px',
                paddingBottom: '15px',
                paddingLeft: '15px',
                paddingRight: '15px',
              }}
              bgColor="transparent"
              border="1px solid"
              borderColor="#173D33"
              hoverStyles={{ styleFirst: 'border-color' }}
            />
            <RoundBtn
              type="button"
              SvgWidth={36}
              SvgHeight={36}
              spritePath={sprite}
              iconName="icon-arrow-right-slide"
              width="66px"
              height="66px"
              padding={{
                paddingTop: '15px',
                paddingBottom: '15px',
                paddingLeft: '15px',
                paddingRight: '15px',
              }}
              bgColor="transparent"
              border="1px solid"
              borderColor="#173D33"
              hoverStyles={{ styleFirst: 'border-color' }}
            />
          </ButtonsWrap>
        </IndicatorsWrap>
        <SliderGallery />
      </Container>
    </Section>
  );
};

export default CasesSection;
