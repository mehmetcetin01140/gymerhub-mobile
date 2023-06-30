import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useFormik} from 'formik';
import Input from '../form-elements/Input';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';
import loginFormValidationSchema from '../../valitadionSchemas/LoginFormValidationSchema';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const LoginForms = () => {
  const {signIn} = useContext(AuthContext);
  const styles = makeStyles(theme);
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: onSubmit
  });
  function onSubmit() {
  loginFormValidationSchema
      .validate(loginFormik.values, {abortEarly: false})
      .then(() => {
        signIn(
          loginFormik.values.email,
          loginFormik.values.password,
        );
      })
      .catch(validationErrors => {
        const errorMessages = validationErrors.inner.map(
          (error: any) => error.message,
        );
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Hata',
          textBody: errorMessages.join('\n'),
          autoClose: 4000,
        });
      });
  }
  const formikValues = loginFormik.values;
  const formikErrors = loginFormik.errors;
  return (
    <View style={styles.pageWrapper}>
      <Text style={styles.loginTextStyle}>Email adresinizle giriş yapın</Text>
      <Input
        value={formikValues.email}
        onChangeText={loginFormik.handleChange('email')}
        placeHolder="Email adresi"
        errorText={formikErrors.email}
      />
      <Input
        value={formikValues.password}
        onChangeText={loginFormik.handleChange('password')}
        placeHolder="Parola"
        errorText={formikErrors.password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Şifremi unuttum</Text>
      </TouchableOpacity>
      <Button
        onPress={loginFormik.handleSubmit}
        buttonText="Giriş yap"
        styleProps={{marginTop: 16}}
      />
    </View>
  );
};

export default LoginForms;

const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
    },
    loginTextStyle: {
      ...theme.fonts.caption,
      color: theme.colors.mainColors.black,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 4,
    },
    forgotPassword: {
      marginLeft: 'auto',
      marginTop: 6,
    },
    forgotPasswordText: {
      ...theme.fonts.caption,
      color: theme.colors.mainColors.purple,
    },
  });
