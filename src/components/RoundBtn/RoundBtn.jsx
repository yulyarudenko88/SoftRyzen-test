
import PropTypes from "prop-types";
import {Btn} from './RoundBtn.styled.js'

const RoundBtn = ({
  type,
  SvgWidth,
  SvgHeight,
  spritePath,
  iconName,

  width = "40px",
  height = "39px",
  padding = {
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  bgColor = "#DCEFD8",
  border = "0px solid",
  borderColor = "transparent",

  hoverStyles = { styleFirst: "background-color" },
  hoverParams = { paramFirst: "#97D28B" },
  ...props
}) => {
  return (
    <Btn
      type={type}
      width={width}
      height={height}
      bgcolor={bgColor}
      border={border}
      bordercolor={borderColor}
      padding={padding}
      hoverstyles={hoverStyles}
      hoverparams={hoverParams}
      {...props}
    >
      <svg aria-hidden="true" width={SvgWidth} height={SvgHeight}>
        <use href={`${spritePath}#${iconName}`}></use>
      </svg>
    </Btn>
  );
};

RoundBtn.propTypes = {
  type: PropTypes.string,
  SvgWidth: PropTypes.number,
  SvgHeight: PropTypes.number,
  spritePath: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.object,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  hoverStyles: PropTypes.shape({
    styleFirst: PropTypes.string,
    styleSecond: PropTypes.string,
    styleThird: PropTypes.string,
  }),
  hoverParams: PropTypes.shape({
    paramFirst: PropTypes.string,
    paramSecond: PropTypes.string,
    paramThird: PropTypes.string,
  }),
};

export default RoundBtn;
