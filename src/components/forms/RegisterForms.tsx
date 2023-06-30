import {View, Text, StyleSheet} from 'react-native';
import React, {SetStateAction, Dispatch} from 'react';
import Input from '../form-elements/Input';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';
import {useFormik} from 'formik';
import registerFormValidationSchema from '../../valitadionSchemas/RegisterFormValidationSchema';
import {createUserWithEmailAndPassword} from '../../services/createUserWithEmailAndPassword';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import Checkbox from '../form-elements/Checkbox';

const RegisterForms = () => {
  const styles = makeStyles(theme);
  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      isLegalTextCheckboxChecked: false,
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: onSubmit,
  });
  function onSubmit() {
    registerFormValidationSchema
      .validate(registerFormik.values, {abortEarly: false})
      .then(() => {
        createUserWithEmailAndPassword(
          registerFormik.values.email,
          registerFormik.values.password,
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
  const formikValues = registerFormik.values;
  const formikErrors = registerFormik.errors;
  return (
    <View style={styles.pageWrapper}>
      <Text style={styles.loginTextStyle}>Email adresinizle üye olun</Text>
      <Input
        value={formikValues.email}
        onChangeText={registerFormik.handleChange('email')}
        placeHolder="Email adresi"
        errorText={formikErrors.email}
      />
      <Input
        value={formikValues.password}
        onChangeText={registerFormik.handleChange('password')}
        placeHolder="Parola"
        errorText={formikErrors.password}
        secureTextEntry
      />
      <Input
        value={formikValues.confirmPassword}
        onChangeText={registerFormik.handleChange('confirmPassword')}
        placeHolder="Parola Tekrarı"
        errorText={formikErrors.confirmPassword}
        secureTextEntry
      />
      <Checkbox
        checked={registerFormik.values.isLegalTextCheckboxChecked}
        checkboxPress={() =>
          registerFormik.setFieldValue(
            'isLegalTextCheckboxChecked',
            !registerFormik.values.isLegalTextCheckboxChecked,
          )
        }
      />
      <Button
        onPress={registerFormik.handleSubmit}
        buttonText="Üye Ol"
        styleProps={{marginTop: 16}}
      />
    </View>
  );
};

export default RegisterForms;

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
