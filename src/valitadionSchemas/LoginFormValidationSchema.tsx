import * as Yup from 'yup';

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email('Geçerli bir e-posta adresi giriniz.').required('E-posta alanı boş olamaz.'),
  password: Yup.string().min(6, 'Şifre en az 6 karakterden oluşmalıdır.').required('Şifre alanı boş olamaz.'),
});

export default loginFormValidationSchema;
