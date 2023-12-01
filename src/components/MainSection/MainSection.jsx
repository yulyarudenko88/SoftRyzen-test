import MobileWindTurbine from "../../assets/images/MainSection/mobile_wind-turbine.jpg";
import MobileWindTurbineRetina from "../../assets/images/MainSection/mobile_wind-turbine@2x.jpg";
import TabletWindTurbine from "../../assets/images/MainSection/tablet_wind-turbine.jpg";
import TabletWindTurbineRetina from "../../assets/images/MainSection/tablet_wind-turbine@2x.jpg";
import DesktopWindTurbine from "../../assets/images/MainSection/desktop_wind-turbine.jpg";
import DesktopWindTurbineRetina from "../../assets/images/MainSection/desktop_wind-turbine@2x.jpg";

import MainBtn from "../MainBtn/MainBtn.jsx";

const MainSection = () => {
  return (
    <section style={{paddingTop: '100px'}}>
      <h1>RENEWABLE ENERGY For any task</h1>
      <p>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      <MainBtn type="button">Learn more</MainBtn>
      <picture>
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
            </picture>
    </section>
  );
};

export default MainSection;
