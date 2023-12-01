import PropTypes from "prop-types";
import { Title } from "./SectionTitle.styled";

const SectionTitle = ({ children, textAlign = 'start' }) => {
  return <Title textAlign={textAlign}>{children}</Title>;
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
};

export default SectionTitle;
