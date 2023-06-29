import {StyleSheet, TouchableHighlight, Text, ViewStyle} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import React from 'react';
import theme from '../../theme/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  styleProps?: ViewStyle;
  buttonText: string;
  iconName?: string;
  iconButtonBackgroundColor?: string;
  iconButtonTextColor?: string;
  iconColor?: string;

  onPress: () => void;
};

type IconButtonProps = Pick<
  Props,
  | 'iconName'
  | 'iconButtonBackgroundColor'
  | 'iconButtonTextColor'
  | 'iconColor'
  | 'buttonText'
>;

export default function Button({
  styleProps,
  buttonText,
  iconName,
  iconButtonBackgroundColor,
  iconButtonTextColor,
  iconColor,
  onPress,
}: Props) {
  const styles = makeStyles(theme);
  const IconButton = ({
    iconName,
    iconButtonBackgroundColor,
    buttonText,
    iconButtonTextColor,
    iconColor,
  }: IconButtonProps) => {
    return (
      iconName && (
        <Icon.Button
          name={iconName}
          backgroundColor={iconButtonBackgroundColor}
          color={iconButtonTextColor}
          iconStyle={{color: iconColor}}>
          {buttonText}
        </Icon.Button>
      )
    );
  };

  return iconName ? (
    <IconButton
      iconName={iconName}
      iconButtonBackgroundColor={iconButtonBackgroundColor}
      buttonText={buttonText}
      iconButtonTextColor={iconButtonTextColor}
      iconColor={iconColor}
    />
  ) : (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.buttonWrapper, styleProps]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
  );
}

const makeStyles = (theme: any) =>
  StyleSheet.create({
    buttonWrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.mainColors.purple,
      padding: 8,
      borderRadius: 12,
    },
    buttonText: {
      ...theme.fonts.button_1,
      color: theme.colors.textColors.white,
    },
  });
