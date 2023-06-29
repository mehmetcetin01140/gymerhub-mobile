import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import React from 'react';
import Input from '../form-elements/Input';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';
type Props = {
  changeCurrentRenderedComponent: Dispatch<SetStateAction<string>>;
};
const Register = ({changeCurrentRenderedComponent}: Props) => {
  const styles = makeStyles(theme);
  return (
    <View style={styles.pageWrapper}>
    
    </View>
  );
};

export default Register;

const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
    },
    loginHeader: {
      flex: 0.2,
      backgroundColor: theme.colors.mainColors.blue,
      justifyContent: 'center',
    },
    loginHeaderTitleText: {
      ...theme.fonts.headline_3,
      color: theme.colors.textColors.white,
      marginLeft: 16,
    },
    loginContent: {
      flex: 0.8,
      backgroundColor: theme.colors.mainColors.white,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      marginTop: -12,
      padding: 26,
    },
    Welcome: {
      ...theme.fonts.headline_3,
      color: theme.colors.textColors.blue,
    },
    welcomeDesc: {
      ...theme.fonts.subtitle_2,
      fontSize: 12,
      marginTop: 3,
      color: theme.colors.textColors.blue,
      marginBottom: 12,
    },
    buttonStyle: {
      marginTop: 32,
    },
    orTextStyle: {
      ...theme.fonts.caption,
      fontWeight: 'bold',

      color: '#EE7623',
      textAlign: 'center',
      marginTop: 20,
    },

    signUpText: {
      marginTop: 12,
      textAlign: 'center',
      ...theme.fonts.body_2,
      color: theme.colors.textColors.gray,
      fontWeight: 'bold',
      lineHeight: 14,
    },
    signUpInnerText: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.textColors.blue,

      lineHeight: 17,
    },
  });
