import * as Yup from 'yup';

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().required('* Email adresi boş bırakılamaz.').trim(),
  password: Yup.string().required('* Şifre boş bırakılamaz.').trim(),
});

export default loginFormValidationSchema;
