import sprite from "../../assets/images/sprite.svg";
import { Wrap, Svg, Ecosolution } from "./Logo.styled.js";

const Logo = () => {
  return (
      <Wrap href="#" title="logo">
        <Svg aria-hidden="true" width={31} height={18}>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
        <Ecosolution aria-hidden="true" width={170} height={40}>
          <use href={`${sprite}#icon-ecosolution`}></use>
        </Ecosolution>
        <Svg aria-hidden="true" width={60} height={18}>
          <use href={`${sprite}#icon-GREENERGY-FOR-LIFE`}></use>
        </Svg>
      </Wrap>
  );
};

export default Logo;
