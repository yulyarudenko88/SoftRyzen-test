import { useState, useEffect } from 'react';
import Container from '../Container/Container.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { Section, Counter, TitleWrap } from './ElectricitySection.styled.js';

const storedCount = localStorage.getItem('electricityCount');
const initialCount = storedCount ? parseInt(storedCount, 10) : 1134147814;

const ElectricitySection = () => {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    // increasing counter every second and writing counter value to local storage
    const intervalId = setInterval(() => {
      setCounter(prevCount => {
        const newCount = prevCount + 1;
        localStorage.setItem('electricityCount', newCount.toString());
        return newCount;
      });
    }, 1000);

    //clearing interval when component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section id="electricity">
      <Container>
        <TitleWrap>
          <SectionTitle textAlign="center">
            Electricity we produced for all time
          </SectionTitle>
        </TitleWrap>
        <Counter>
          {counter.toLocaleString()}
          <span>kWh</span>
        </Counter>
      </Container>
    </Section>
  );
};

export default ElectricitySection;
