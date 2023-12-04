import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import sprite from '../../assets/images/sprite.svg';
import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import RoundBtn from '../RoundBtn/RoundBtn.jsx';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn.jsx';
import Menu from '../Menu/Menu.jsx';
import { StyledHeader, Wrap, BtnWrap } from './Header.styled.js';

const Header = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToTop = window.scrollY === 0;
      setIsAtTop(scrolledToTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader isAtTop={isAtTop}>
      <Container>
        <Wrap>
          <Logo />
          <BtnWrap>
            <RoundBtn
              type="button"
              aria-label='open burger-menu'
              SvgWidth={16}
              SvgHeight={16}
              spritePath={sprite}
              iconName="icon-menu"
              onClick={handleToggleMenu}
            />
            {isMobile && (
              <Link to="contact" smooth={true} duration={500}>
                <SecondaryBtn>Get in touch</SecondaryBtn>
              </Link>
            )}
          </BtnWrap>
        </Wrap>
      </Container>
      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={handleToggleMenu} />}
    </StyledHeader>
  );
};

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
