import MainBtn from "../MainBtn/MainBtn.jsx";
import {
  Form,
  FildWrap,
  Label,
  Input,
  Textarea,
} from "./ContactForm.styled.js";

const ContactForm = () => {
  return (
    <Form>
      <FildWrap>
        <Label>
          * Full name:
          <Input type="text" name="name" required placeholder="John Rosie" />
        </Label>
      </FildWrap>
      <FildWrap>
        <Label>
          * E-mail:
          <Input
            type="email"
            name="email"
            required
            placeholder="johnrosie@gmail.com"
          />
        </Label>
      </FildWrap>
      <FildWrap>
        <Label>
          * Phone:
          <Input type="tel" name="phone" required placeholder="380961234567" />
        </Label>
      </FildWrap>
      <Label>
        Message
        <Textarea name="message" placeholder="Your message"></Textarea>
      </Label>
      <MainBtn type="submit">Send</MainBtn>
    </Form>
  );
};

export default ContactForm;
