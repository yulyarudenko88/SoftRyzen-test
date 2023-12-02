import { useState } from "react";
import PropTypes from "prop-types";
import sprite from "../../assets/images/sprite.svg";
import { questionsData } from "../../assets/data/questions.js";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li key={question.slice(0, 10)}>
      <div>
        <button type="button" onClick={toggleAnswer} aria-label="Toggle answer">
          {isOpen ? (
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-minus`}></use>
            </svg>
          ) : (
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-add`}></use>
            </svg>
          )}
        </button>
        <p>{question}</p>
      </div>
      {isOpen && <p>{answer}</p>}
    </li>
  );
};

const FAQList = () => {
  return (
    <ul>
      {questionsData.map(({ question, answer, index }) => (
        <FAQItem key={index} question={question} answer={answer} />
      ))}
    </ul>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQList;
