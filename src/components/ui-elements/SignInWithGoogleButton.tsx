import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import theme from '../../theme/Theme';
import GoogleSvg from '../svg/googleSvg';

type Props = {
  styleProps: ViewStyle;
  buttonText: string;
  onPress: () => void;
};

export default function SignInWithGoogleButton({
  styleProps,
  buttonText,
  onPress,
}: Props) {
  const styles = makeStyles(theme);
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.buttonWrapper, styleProps]}>
      <View style={styles.buttonContent}>
        <View style={styles.googleSvgWrapper}>
          <GoogleSvg size={30} />
        </View>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableHighlight>
  );
}

const makeStyles = (theme: any) =>
  StyleSheet.create({
    buttonWrapper: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.mainColors.gray,
      padding: 12,
      borderRadius: 4,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    googleSvgWrapper: {
      marginRight: 8,
      position: 'absolute',
      left: 0,
    },
    buttonText: {
      width: '100%',
      ...theme.fonts.label,
      letterSpacing: 0.2,
      color: theme.colors.textColors.black,
      textAlign: 'center',
      marginLeft: 8,
    },
  });
