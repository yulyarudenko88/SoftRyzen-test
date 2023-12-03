import { useState, useEffect } from 'react';
import MainSection from '../../components/MainSection/MainSection.jsx';
import AboutSection from '../../components/AboutSection/AboutSection.jsx';
import ElectricitySection from '../../components/ElectricitySection/ElectricitySection.jsx';
import CasesSection from '../../components/CasesSection/CasesSection.jsx';
import FAQSection from '../../components/FAQSection/FAQSection.jsx';
import ContactUsSection from '../../components/ContactUsSection/ContactUsSection.jsx';

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (window.innerWidth >= 1280) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

      if (window.innerWidth >= 1280) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <MainSection isMobile={isMobile} />
      <AboutSection isMobile={isMobile} isDesktop={isDesktop} />
      <ElectricitySection />
      <CasesSection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
};

export default MainPage;
