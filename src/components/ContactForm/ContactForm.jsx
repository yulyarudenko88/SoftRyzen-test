import { useFormik } from 'formik';
import MainBtn from '../MainBtn/MainBtn.jsx';
import {
  Form,
  FildWrap,
  Label,
  Input,
  Textarea,
  ErrorMessage,
} from './ContactForm.styled.js';
import { validationSchema } from '../../assets/helpers/validationSchema.js';

const ContactForm = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isSubmitting,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        console.log(values);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <FildWrap>
        <Label>
          * Full name:
          <Input
            type="text"
            name="name"
            required
            placeholder="John Rosie"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            errors={touched.name && errors?.name}
          />
          {touched.name && errors?.name && (
            <ErrorMessage>Wrong Fullname</ErrorMessage>
          )}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            errors={touched.email && errors?.email}
          />
          {touched.email && errors?.email && (
            <ErrorMessage>Wrong Email</ErrorMessage>
          )}
        </Label>
      </FildWrap>

      <FildWrap>
        <Label>
          * Phone:
          <Input
            type="tel"
            name="phone"
            required
            placeholder="380961234567"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            errors={touched.phone && errors?.phone}
          />
          {touched.phone && errors?.phone && (
            <ErrorMessage>Wrong Phone</ErrorMessage>
          )}
        </Label>
      </FildWrap>

      <Label>
        Message:
        <Textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />
      </Label>

      <MainBtn type="submit" disabled={isSubmitting}>
        Send
      </MainBtn>
    </Form>
  );
};

export default ContactForm;
