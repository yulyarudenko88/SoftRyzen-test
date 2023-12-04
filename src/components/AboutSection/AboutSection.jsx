import PropTypes from 'prop-types';
import Container from '../Container/Container.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import ValuesGallery from '../ValuesGallery/ValuesGallery.jsx';
import { Section, Picture, InfoWrap, Desc } from './AboutSection.styled.js';

import MobileWindTurbine from '../../assets/images/AboutSection/mobile_wind-turbine.jpg';
import MobileWindTurbineRetina from '../../assets/images/AboutSection/mobile_wind-turbine@2x.jpg';
import TabletWindTurbine from '../../assets/images/AboutSection/tablet_wind-turbine.jpg';
import TabletWindTurbineRetina from '../../assets/images/AboutSection/tablet_wind-turbine@2x.jpg';
import DesktopWindTurbine from '../../assets/images/AboutSection/desktop_wind-turbine.jpg';
import DesktopWindTurbineRetina from '../../assets/images/AboutSection/desktop_wind-turbine@2x.jpg';

const AboutSection = ({ isMobile, isDesktop }) => {
  return (
    <Section id="about">
      <Container>
        <Picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${DesktopWindTurbine}, ${DesktopWindTurbineRetina} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${TabletWindTurbine}, ${TabletWindTurbineRetina} 2x`}
          />
          <img
            src={MobileWindTurbine}
            srcSet={`${MobileWindTurbine}, ${MobileWindTurbineRetina} 2x`}
            alt="Wind turbine - clean energy"
          />
        </Picture>
        <InfoWrap>
          <SectionTitle>Main values of our company</SectionTitle>
          <Desc>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </Desc>
        </InfoWrap>
        <ValuesGallery isMobile={isMobile} isDesktop={isDesktop} />
      </Container>
    </Section>
  );
};

AboutSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default AboutSection;
