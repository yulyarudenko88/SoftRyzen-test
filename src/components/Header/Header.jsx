import sprite from "../../assets/images/sprite.svg";
import Container from "../Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";
import RoundBtn from "../RoundBtn/RoundBtn.jsx";
import { StyledHeader, Wrap } from "./Header.styled.js";

const Header = () => {
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
          />
        </Wrap>
      </Container>
    </StyledHeader>
  );
};

export default Header;
