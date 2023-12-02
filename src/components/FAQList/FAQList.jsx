import { useState } from "react";
import FAQItem from "../FAQItem/FAQItem.jsx";
import { questions } from "../../assets/data/questions.js";

const FAQList = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <ul>
      {questions.map(({ question, answer }, index) => (
        <FAQItem
          key={question.slice(0, 10)}
          question={question}
          answer={answer}
          isOpen={index === openQuestionIndex}
          toggleAnswer={() => toggleAnswer(index)}
        />
      ))}
    </ul>
  );
};

export default FAQList;
