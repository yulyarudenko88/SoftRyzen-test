import { useState } from 'react';
import sprite from "../../assets/images/sprite.svg";
import Container from "../Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";
import RoundBtn from "../RoundBtn/RoundBtn.jsx";
import Menu from "../Menu/Menu.jsx";
import { StyledHeader, Wrap } from "./Header.styled.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <Wrap>
          <Logo />
          <RoundBtn
            type="button"
            SvgWidth={16}
            SvgHeight={16}
            spritePath={sprite}
            iconName="icon-menu"
            onClick={handleToggleMenu}
          />
        </Wrap>
      </Container>
      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={handleToggleMenu} />}
    </StyledHeader>
  );
};

export default Header;
