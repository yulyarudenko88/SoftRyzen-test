import PropTypes from 'prop-types';
import sprite from '../../assets/images/sprite.svg';
import { Item, Wrap, Btn, Question, Answer } from './FAQItem.styled';

const FAQItem = ({ question, answer, isOpen, toggleAnswer, isMobile }) => (
  <Item>
    <Wrap>
      <Btn type="button" onClick={toggleAnswer} aria-label="Toggle answer">
        <svg width={!isMobile ? 16 : 28} height={!isMobile ? 16 : 28}>
          <use href={`${sprite}#${isOpen ? 'icon-minus' : 'icon-add'}`}></use>
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
  isMobile: PropTypes.bool.isRequired,
};

export default FAQItem;
