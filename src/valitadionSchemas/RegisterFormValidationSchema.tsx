import * as Yup from 'yup';

const registerFormValidationSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta adresi giriniz.').required('E-posta alanı boş olamaz.'),
    password: Yup.string().min(6, 'Şifre en az 6 karakterden oluşmalıdır.').required('Şifre alanı boş olamaz.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Şifreler eşleşmiyor.')
      .required('Şifre onayı alanı boş olamaz.'),
    isLegalTextCheckboxChecked: Yup.boolean().oneOf([true], 'Üyelik sözleşmesini onaylamalısınız.'),
  });
  
  export default registerFormValidationSchema;
  

