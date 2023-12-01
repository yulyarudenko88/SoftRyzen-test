import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
// import ValuesGallery from "../ValuesGallery/ValuesGallery.jsx";
// import MainBtn from "../MainBtn/MainBtn.jsx";
import { Section } from "./ElectricitySection.styled.js";

// import MobileWindTurbine from "../../assets/images/AboutSection/mobile_wind-turbine.jpg";
// import MobileWindTurbineRetina from "../../assets/images/AboutSection/mobile_wind-turbine@2x.jpg";
// import TabletWindTurbine from "../../assets/images/AboutSection/tablet_wind-turbine.jpg";
// import TabletWindTurbineRetina from "../../assets/images/AboutSection/tablet_wind-turbine@2x.jpg";
// import DesktopWindTurbine from "../../assets/images/AboutSection/desktop_wind-turbine.jpg";
// import DesktopWindTurbineRetina from "../../assets/images/AboutSection/desktop_wind-turbine@2x.jpg";

const ElectricitySection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle textAlign = 'center'>Electricity we produced
for all time</SectionTitle>
        {/* <Picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${DesktopWindTurbine}, ${DesktopWindTurbineRetina} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${TabletWindTurbine}, ${TabletWindTurbineRetina} 2x`}
          />
          <img
            src={MobileWindTurbine}
            srcSet={`${MobileWindTurbine}, ${MobileWindTurbineRetina} 2x`}
            alt="Wind turbine - clean energy"
          />
        </Picture>
        <SectionTitle>Main values of our company</SectionTitle>
        <Desc>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </Desc>
        <ValuesGallery /> */}
      </Container>
    </Section>
  );
};

export default ElectricitySection;