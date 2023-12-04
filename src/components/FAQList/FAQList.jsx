import { useState } from 'react';
import PropTypes from 'prop-types';
import FAQItem from '../FAQItem/FAQItem.jsx';
import { questions } from '../../assets/data/questions.js';
import { List } from './FAQList.styled.js';

const FAQList = ({ isMobile, onHeightChange }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const toggleAnswer = index => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
    onHeightChange();
  };

  return (
    <List>
      {questions.map(({ question, answer }, index) => (
        <FAQItem
          key={question.slice(0, 10)}
          question={question}
          answer={answer}
          isMobile={isMobile}
          isOpen={index === openQuestionIndex}
          toggleAnswer={() => toggleAnswer(index)}
        />
      ))}
    </List>
  );
};

FAQList.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onHeightChange: PropTypes.func,
};

export default FAQList;
