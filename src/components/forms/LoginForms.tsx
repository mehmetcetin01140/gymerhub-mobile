import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useFormik} from 'formik';
import Input from '../form-elements/Input';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';
import loginFormValidationSchema from '../../valitadionSchemas/LoginFormValidationSchema';
const LoginForms = () => {
  const {signIn, user, signOut} = useContext(AuthContext);
  const styles = makeStyles(theme);
  const loginFormik = useFormik({
    initialValues: {
      email: 'abuzer@gmail.com',
      password: '123456',
    },
    validationSchema: loginFormValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async values => {
      await signIn(values.email, values.password);
    },
  });

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
