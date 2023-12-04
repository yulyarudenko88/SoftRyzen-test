import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import sprite from '../../assets/images/sprite.svg';
import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import RoundBtn from '../RoundBtn/RoundBtn.jsx';
import Networks from '../Networks/Networks.jsx';
import {
  StyledFooter,
  LogoWrap,
  InfoList,
  InfoLink,
  Wrap,
} from './Footer.styled.js';

const Footer = ({ isMobile }) => {
  return (
    <StyledFooter>
      <Container>
        <LogoWrap>
          <Logo />
          <Wrap>
            {isMobile && <Networks justifyContent="center" />}
            <Link to="main" smooth={true} duration={500}>
              <RoundBtn
                type="button"
                aria-label='go to main section'
                SvgWidth={16}
                SvgHeight={16}
                spritePath={sprite}
                iconName="icon-arrow-up"
                width="32px"
                height="32px"
                padding={{
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                }}
                bgColor="#97D28B"
                hoverParams={{ paramFirst: '#173D33' }}
              />
            </Link>
          </Wrap>
        </LogoWrap>
        {!isMobile && <Networks justifyContent="center" />}
        <InfoList>
          <InfoLink>
            <address>
              <a
                href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8315971,24.0300057,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0YPQuy4g0KjQvtGC0LAg0KDRg9GB0YLQsNCy0LXQu9C4LCA30JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMCA!3m6!1s0x473add6793de3b25:0xf796db4d26cfc46!8m2!3d49.8315937!4d24.0346191!15sCljRg9C7LiDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LgsIDfQm9GM0LLQvtCyLCDQm9GM0LLQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc5MDAwkgEFcm91dGXgAQA!16s%2Fg%2F122c1f5q?entry=ttu"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </address>
          </InfoLink>
          <InfoLink>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          </InfoLink>
          <InfoLink>ecosolution &#169; 2023</InfoLink>
        </InfoList>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Footer;
