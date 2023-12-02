import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import FAQList from "../FAQList/FAQList.jsx";
import { Section } from "./FAQSection.styled.js";

const FAQSection = () => {
  return (
    <Section>
      <Container>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQList />
      </Container>
    </Section>
  );
};

export default FAQSection;