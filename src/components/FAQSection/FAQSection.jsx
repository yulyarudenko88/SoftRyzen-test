import PropTypes from 'prop-types';
import { useState, useLayoutEffect, useRef } from 'react';
import Container from '../Container/Container.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import FAQList from '../FAQList/FAQList.jsx';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn.jsx';
import {
  Section,
  Question,
  ContentWrapper,
  InfoWrapper,
} from './FAQSection.styled.js';

const FAQSection = ({ isMobile }) => {
  const [infoWrapperHeight, setInfoWrapperHeight] = useState(0);
  const infoWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const updateInfoWrapperHeight = () => {
      if (infoWrapperRef.current) {
        const height = infoWrapperRef.current.getBoundingClientRect().height;
        setInfoWrapperHeight(height);
      }
    };

    updateInfoWrapperHeight();

    const handleResize = () => {
      updateInfoWrapperHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleInfoWrapperHeightChange = () => {
    if (infoWrapperRef.current) {
      const height = infoWrapperRef.current.getBoundingClientRect().height;
      // console.log(height)
      setInfoWrapperHeight(height);
    }
  };

  return (
    <Section>
      <Container>
        <ContentWrapper ref={infoWrapperRef}>
          <InfoWrapper infoWrapperHeight={infoWrapperHeight}>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            {!isMobile && (
              <FAQList
                isMobile={isMobile}
                onHeightChange={handleInfoWrapperHeightChange}
              />
            )}
            <div>
              <Question>Didn't find the answer to your question?</Question>
              <SecondaryBtn>Contact Us</SecondaryBtn>
            </div>
          </InfoWrapper>
          {isMobile && (
            <FAQList
              isMobile={isMobile}
              onHeightChange={handleInfoWrapperHeightChange}
            />
          )}
        </ContentWrapper>
      </Container>
    </Section>
  );
};

FAQSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default FAQSection;
