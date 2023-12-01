import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import SliderGallery from "../SliderGallery/SliderGallery.jsx";
// import MainBtn from "../MainBtn/MainBtn.jsx";
// import { Section, Picture, Desc } from "./AboutSection.styled.js";

const CasesSection = () => {
  return (
    <section>
      <Container>
      <SectionTitle>Successful cases of our company</SectionTitle>
      <SliderGallery />
      </Container>
    </section>
  );
};

export default CasesSection;