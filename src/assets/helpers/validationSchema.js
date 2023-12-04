import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/)
    .required('Wrong Fullname'),
  email: Yup.string().email('Wrong Email').required('Wrong Email'),
  phone: Yup.string()
    .matches(/^[0-9]{12}$/)
    .required('Wrong Phone'),
  message: Yup.string(),
});