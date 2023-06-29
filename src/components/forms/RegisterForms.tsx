import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import React from 'react';
import Input from '../form-elements/Input';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';

const RegisterForms = () => {
  const styles = makeStyles(theme);
  return (
    <View style={styles.pageWrapper}>
      <Text style={styles.loginTextStyle}>Email adresinizle üye olun</Text>
      <Input placeHolder="Email adresi" />
      <Input placeHolder="Parola" secureTextEntry />
      <Input placeHolder="Parola Tekrarı" secureTextEntry />
      <Button buttonText="Giriş yap" styleProps={{marginTop: 16}} />
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
