import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import FAQList from "../FAQList/FAQList.jsx";
// import MainBtn from "../MainBtn/MainBtn.jsx";
// import { Section, Picture, Desc } from "./AboutSection.styled.js";

const FAQSection = () => {
  return (
    <section>
      <Container>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQList />
      </Container>
    </section>
  );
};

export default FAQSection;