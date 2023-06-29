import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import React from 'react';
import Input from '../form-elements/Input';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';
import SignInWithGoogleButton from '../ui-elements/SignInWithGoogleButton';
import LoginForms from '../forms/LoginForms';
type Props = {
  changeCurrentRenderedComponent: Dispatch<SetStateAction<string>>;
};
const Login = ({changeCurrentRenderedComponent}: Props) => {
  const styles = makeStyles(theme);
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZJ1Zt3KFDleia5YsVibsSEkpuCaTpxUzUw&usqp=CAU',
          }}
        />
      </View>
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>Hoşgeldiniz</Text>
        <Text style={styles.continueText}>
          Devam etmek için lütfen giriş yapın.
        </Text>
        <SignInWithGoogleButton buttonText="Google Hesabınla Giriş Yap" />
      </View>
      <View style={styles.orWrapper}>
        <View style={styles.lineStyle}></View>
        <View style={styles.orCenterElement}>
          <Text style={styles.orText}>Ya da</Text>
        </View>
        <View style={styles.lineStyle}></View>
      </View>
      <View style={styles.loginFormWrapper}>
        <LoginForms/>
      </View>
      <View style={styles.togglerWrapper}>
          <TouchableOpacity>
            <Text style={styles.togglerTouchableText}>falan filan</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
    },
    logoWrapper: {
      flex: 0.1,
      backgroundColor: 'red',
    },
    logoImage: {
      flex: 1,
      resizeMode: 'contain',
    },
    welcomeWrapper: {
      flex: 0.3,
      paddingHorizontal: 16,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rebeccapurple',
    },
    welcomeText: {
      ...theme.fonts.headline_2,
      color: theme.colors.mainColors.purple,
    },
    continueText: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.mainColors.gray,
    },
    orWrapper: {
      flex: 0.1,
      backgroundColor:"red",
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    orText: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.mainColors.black,
    },
    lineStyle: {
      flex:1,
      backgroundColor: theme.colors.mainColors.gray,
      height: 1,
    },
    orCenterElement: {
      width: '40%',
      height: 40,
      borderWidth:1,
      flex:2,
      marginHorizontal:16,
      borderColor:theme.colors.mainColors.gray,
      borderRadius: 12,
      backgroundColor: theme.colors.mainColors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginFormWrapper: {
      flex: 0.4,
      backgroundColor: 'green',
      paddingHorizontal:16
    },
    togglerWrapper: {
      flex: 0.1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: 'royalblue',
      borderTopWidth:1,
      borderColor:theme.colors.mainColors.gray,
      paddingHorizontal:16,
    },
    togglerTouchableText:{
      ...theme.fonts.body_2,
      color:theme.colors.mainColors.black
    }
  });
