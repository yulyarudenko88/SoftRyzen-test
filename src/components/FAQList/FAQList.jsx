import { useState } from "react";
import FAQItem from "../FAQItem/FAQItem.jsx";
import { questions } from "../../assets/data/questions.js";
import { List } from "./FAQList.styled.js";

const FAQList = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <List>
      {questions.map(({ question, answer }, index) => (
        <FAQItem
          key={question.slice(0, 10)}
          question={question}
          answer={answer}
          isOpen={index === openQuestionIndex}
          toggleAnswer={() => toggleAnswer(index)}
        />
      ))}
    </List>
  );
};

export default FAQList;
