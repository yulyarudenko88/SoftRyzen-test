import PropTypes from "prop-types";
import { Title } from "./SectionTitle.styled";

const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
