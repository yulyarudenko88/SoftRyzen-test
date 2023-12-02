import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { Item, Wrap, Btn, Question, Answer } from "./FAQItem.styled";

const FAQItem = ({ question, answer, isOpen, toggleAnswer }) => (
  <Item>
    <Wrap>
      <Btn type="button" onClick={toggleAnswer} aria-label="Toggle answer">
        <svg width={16} height={16}>
          <use href={`${sprite}#${isOpen ? "icon-minus" : "icon-add"}`}></use>
        </svg>
      </Btn>
      <Question>{question}</Question>
    </Wrap>
    {isOpen && <Answer>{answer}</Answer>}
  </Item>
);

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAnswer: PropTypes.func.isRequired,
};

export default FAQItem;