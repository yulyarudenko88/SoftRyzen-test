import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
// import MainBtn from "../MainBtn/MainBtn.jsx";
import { Section, Desc } from "./AboutSection.styled.js";

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Main values of our company</SectionTitle>
        <Desc>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </Desc>
      </Container>
    </Section>
  );
};

export default AboutSection;
