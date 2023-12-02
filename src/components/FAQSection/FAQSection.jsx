import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import FAQList from "../FAQList/FAQList.jsx";
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn.jsx";
import { Section, Question } from "./FAQSection.styled.js";

const FAQSection = () => {
  return (
    <Section>
      <Container>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQList />
      <Question>Didn't find the answer to your question?</Question>
      <SecondaryBtn >Contact Us</SecondaryBtn>
      </Container>
    </Section>
  );
};

export default FAQSection;