import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Networks from "../Networks/Networks.jsx";
import MainBtn from "../MainBtn/MainBtn.jsx";
import {
  Section,
  ContactsList,
  ItemTitle,
  TelList,
  TelNumber,
  ContactWrap, Contact, Form, FildWrap, Label, Input, Textarea
} from "./ContactUsSection.styled.js";
import sprite from "../../assets/images/sprite.svg";

const ContactUsSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle textAlign="center">Contact us</SectionTitle>
        <ContactsList>
          <Contact>
            <ItemTitle>Phone:</ItemTitle>
            <TelList>
              <TelNumber>
                <svg width={24} height={24}>
                  <use href={`${sprite}#icon-call`}></use>
                </svg>
                <a href="tel:+38 (098) 12 34 567">38 (098) 12 34 567</a>
              </TelNumber>
              <TelNumber>
                <svg width={24} height={24}>
                  <use href={`${sprite}#icon-call`}></use>
                </svg>
                <a href="tel:+38 (093) 12 34 567">38 (093) 12 34 567</a>
              </TelNumber>
            </TelList>
          </Contact>
          <Contact>
            <ItemTitle>E-mail:</ItemTitle>
            <ContactWrap>
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-sms`}></use>
              </svg>
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </ContactWrap>
          </Contact>
          <Contact>
            <ItemTitle>Address:</ItemTitle>
            <ContactWrap>
              <svg width={24} height={24}>
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              <address>
                <a
                  href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2,+%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8315971,24.0300057,17z/data=!3m1!4b1!4m10!1m2!2m1!1z0YPQuy4g0KjQvtGC0LAg0KDRg9GB0YLQsNCy0LXQu9C4LCA30JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMCA!3m6!1s0x473add6793de3b25:0xf796db4d26cfc46!8m2!3d49.8315937!4d24.0346191!15sCljRg9C7LiDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LgsIDfQm9GM0LLQvtCyLCDQm9GM0LLQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc5MDAwkgEFcm91dGXgAQA!16s%2Fg%2F122c1f5q?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </a>
              </address>
            </ContactWrap>
          </Contact>
          <Contact>
            <ItemTitle>Social Networks:</ItemTitle>
            <Networks gap='32px'/>
          </Contact>
        </ContactsList>
        <Form>
          <FildWrap>
            <Label>
              * Full name:
              <Input type="text" name="name" required placeholder="John Rosie"/>
            </Label>
          </FildWrap>
          <FildWrap>
            <Label>
              * E-mail:
              <Input type="email" name="email" required placeholder="johnrosie@gmail.com"/>
            </Label>
          </FildWrap>
          <FildWrap>
            <Label>
              * Phone:
              <Input type="tel" name="phone" required placeholder="380961234567"/>
            </Label>
          </FildWrap>

          <Label>
            Message
            <Textarea name="message" placeholder="Your message"></Textarea>
          </Label>
          <MainBtn type='submit'>Send</MainBtn>
        </Form>
      </Container>
    </Section>
  );
};

export default ContactUsSection;
