import PropTypes from 'prop-types';
import {
  Gallery,
  GalleryItem,
  TitleWrap,
  Title,
  Desc,
} from './ValuesGallery.styled.js';

import IconOpenness from '../../assets/images/AboutSection/maximize-circle.svg';
import IconResponsibility from '../../assets/images/AboutSection/global-edit.svg';
import IconInnovation from '../../assets/images/AboutSection/cpu-charge.svg';
import IconQuality from '../../assets/images/AboutSection/ranking.svg';
import TabletSolarPanels from '../../assets/images/AboutSection/tablet_solar-panels.jpg';
import TabletSolarPanelsRetina from '../../assets/images/AboutSection/tablet_solar-panels@2x.jpg';
import DesktopSolarPanels from '../../assets/images/AboutSection/desktop_solar-panels.jpg';
import DesktopSolarPanelsRetina from '../../assets/images/AboutSection/desktop_solar-panels@2x.jpg';
import TabletWindFarms from '../../assets/images/AboutSection/tablet_wind-farms.jpg';
import TabletWindFarmsRetina from '../../assets/images/AboutSection/tablet_wind-farms@2x.jpg';
import DesktopWindFarms from '../../assets/images/AboutSection/desktop_wind-farms.jpg';
import DesktopWindFarmsRetina from '../../assets/images/AboutSection/desktop_wind-farms@2x.jpg';

const ValuesGallery = ({ isMobile, isDesktop }) => {
  const iconSize = isDesktop
    ? { width: 24, height: 24 }
    : { width: 16, height: 16 };

  return (
    <Gallery>
      <GalleryItem>
        <TitleWrap>
          <img src={IconOpenness} alt="Icon" {...iconSize} />
          <Title>Openness</Title>
        </TitleWrap>
        <Desc>to the world, people, new ideas and projects</Desc>
      </GalleryItem>
      <GalleryItem>
        <TitleWrap>
          <img src={IconResponsibility} alt="Icon" {...iconSize} />
          <Title>Responsibility</Title>
        </TitleWrap>
        <Desc>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </Desc>
      </GalleryItem>
      {isMobile && (
        <>
          <GalleryItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${DesktopWindFarms}, ${DesktopWindFarmsRetina} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${TabletWindFarms}, ${TabletWindFarmsRetina} 2x`}
              />
              <img
                src={TabletWindFarms}
                srcSet={`${TabletWindFarms}, ${TabletWindFarmsRetina} 2x`}
                alt="Wind farms fields"
              />
            </picture>
          </GalleryItem>
          <GalleryItem>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${DesktopSolarPanels}, ${DesktopSolarPanelsRetina} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${TabletSolarPanels}, ${TabletSolarPanelsRetina} 2x`}
              />
              <img
                src={TabletSolarPanels}
                srcSet={`${TabletSolarPanels}, ${TabletSolarPanelsRetina} 2x`}
                alt="Man-worker goes near solar panels"
              />
            </picture>
          </GalleryItem>
        </>
      )}
      <GalleryItem>
        <TitleWrap>
          <img src={IconInnovation} alt="Icon" {...iconSize} />
          <Title>Innovation</Title>
        </TitleWrap>
        <Desc>
          we use the latest technology to implement non-standard solutions
        </Desc>
      </GalleryItem>
      <GalleryItem>
        <TitleWrap>
          <img src={IconQuality} alt="Icon" {...iconSize} />
          <Title>Quality</Title>
        </TitleWrap>
        <Desc>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </Desc>
      </GalleryItem>
    </Gallery>
  );
};

ValuesGallery.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default ValuesGallery;
