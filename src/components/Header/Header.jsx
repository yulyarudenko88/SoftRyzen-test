import { useState, useEffect } from 'react';
import sprite from "../../assets/images/sprite.svg";
import Container from "../Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";
import RoundBtn from "../RoundBtn/RoundBtn.jsx";
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn.jsx";
import Menu from "../Menu/Menu.jsx";
import { StyledHeader, Wrap, BtnWrap } from "./Header.styled.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <Wrap>
          <Logo />
          <BtnWrap>
          <RoundBtn
            type="button"
            SvgWidth={16}
            SvgHeight={16}
            spritePath={sprite}
            iconName="icon-menu"
            onClick={handleToggleMenu}
          />
          {isMobile && <SecondaryBtn>Get in touch</SecondaryBtn>}
          </BtnWrap>
        </Wrap>
      </Container>
      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
