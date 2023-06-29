import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import theme from '../../../theme/Theme';  
import SignInWithGoogleButton from '../../../components/ui-elements/SignInWithGoogleButton';
import LoginForms from '../../../components/forms/LoginForms';
import RegisterForms from '../../../components/forms/RegisterForms';
import {Keyboard, KeyboardEvent} from 'react-native';
import FadeIn from '../../../components/animations/FadeIn';
import SlideInFromBottom from '../../../components/animations/SlideInFromBottom';

const LoginRegister = () => {
  const styles = makeStyles(theme);
  const [currentRenderedComponent, setCurrentRenderedComponent] =
    useState<string>('Login');
  const [isTheKeyboardShowing, setIsTheKeyboardShowing] =
    useState<boolean>(false);
  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      handleKeyboardWillShow,
    );
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      handleKeyboardWillHide,
    );
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const handleLoginRegisterToggler = () => {
    setCurrentRenderedComponent((prev:string)=>
      prev == 'Login' ? 'Register' : 'Login',
    );
  };
  const handleKeyboardWillShow = (event: KeyboardEvent) => {
    setIsTheKeyboardShowing(true);
  };
  const handleKeyboardWillHide = (event: KeyboardEvent) => {
    setIsTheKeyboardShowing(false);
  };

  return (
    <SlideInFromBottom style={{flex: 1}}>
      <View style={[styles.pageWrapper]}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoImage}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZJ1Zt3KFDleia5YsVibsSEkpuCaTpxUzUw&usqp=CAU',
            }}
          />
        </View>
        <View
          style={[
            !isTheKeyboardShowing
              ? styles.welcomeWrapper
              : styles.welcomeWrapperKeyboardActive,
          ]}>
          <FadeIn delay={100}>
            <Text
              style={[
                styles.welcomeText,
                isTheKeyboardShowing && {marginBottom: 8},
              ]}>
              Hoşgeldiniz
            </Text>
          </FadeIn>
          {!isTheKeyboardShowing && (
            <>
              <FadeIn delay={200}>
                <Text style={styles.continueText}>
                  Devam etmek için lütfen giriş yapın.
                </Text>
              </FadeIn>
              <SignInWithGoogleButton buttonText="Google hesabınla giriş yap" />
            </>
          )}
        </View>

        {!isTheKeyboardShowing && (
          <>
            <SlideInFromBottom style={styles.orWrapper}>
              <View style={styles.lineStyle}></View>
              <View style={styles.orCenterElement}>
                <Text style={styles.orText}>Ya da</Text>
              </View>
              <View style={styles.lineStyle}></View>
            </SlideInFromBottom>
          </>
        )}
        {currentRenderedComponent == 'Login' ? (
          <SlideInFromBottom style={styles.loginFormWrapper}>
            <LoginForms />
          </SlideInFromBottom>
        ) : (
          <SlideInFromBottom style={styles.registerFormWrapper}>
            <RegisterForms />
          </SlideInFromBottom>
        )}
        {isTheKeyboardShowing && (
          <>
            <SlideInFromBottom style={styles.orWrapperKeyboardActive}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.lineStyle}></View>
                <View style={styles.orCenterElement}>
                  <Text style={styles.orText}>Ya da</Text>
                </View>
                <View style={styles.lineStyle}></View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <SignInWithGoogleButton buttonText="Google hesabınla giriş yap" />
              </View>
            </SlideInFromBottom>
          </>
        )}
        <View
          style={[
            isTheKeyboardShowing
              ? styles.togglerWrapperKeyboardActive
              : styles.togglerWrapper,
          ]}>
          <TouchableOpacity onPress={handleLoginRegisterToggler}>
            <Text style={styles.togglerTouchableText}>
              {currentRenderedComponent == 'Login'
                ? 'Henüz üye değil misiniz?'
                : 'Zaten üye misiniz?'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SlideInFromBottom>
  );
};

export default LoginRegister;

const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
      paddingVertical: 6,
      backgroundColor: '#FFFFFF',
    },
    logoWrapper: {
      flex: 0.1,
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
    },
    welcomeWrapperKeyboardActive: {
      paddingHorizontal: 16,
      alignItems: 'center',
    },
    welcomeText: {
      ...theme.fonts.headline_2,
      color: theme.colors.mainColors.purple,
    },
    continueText: {
      ...theme.fonts.body_3,
      color: theme.colors.textColors.gray,
    },
    orWrapper: {
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    orWrapperKeyboardActive: {
      flex: 0.3,
      justifyContent: 'space-evenly',
      paddingHorizontal: 16,
    },
    orText: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.mainColors.black,
    },
    lineStyle: {
      flex: 1,
      backgroundColor: theme.colors.borderColors.gray,
      height: 0.5,
    },
    orCenterElement: {
      width: '40%',
      height: 35,
      borderWidth: 0.5,
      flex: 2,
      marginHorizontal: 16,
      borderColor: theme.colors.borderColors.gray,
      borderRadius: 12,
      backgroundColor: theme.colors.mainColors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginFormWrapper: {
      flex: 0.4,
      paddingHorizontal: 16,
    },
    registerFormWrapper: {
      flex: 0.5,
      paddingHorizontal: 16,
    },
    togglerWrapper: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: theme.colors.borderColors.gray,
      paddingHorizontal: 16,
    },
    togglerWrapperKeyboardActive: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginTop: 'auto',
      marginBottom: 16,
    },
    togglerTouchableText: {
      ...theme.fonts.body_2,
      fontWeight: '600',
      color: theme.colors.mainColors.black,
    },
  });
