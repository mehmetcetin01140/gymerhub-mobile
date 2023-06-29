import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {useState, Dispatch, SetStateAction} from 'react';
import React from 'react';
import theme from '../../theme/Theme';
import IonIcons from 'react-native-vector-icons/Ionicons';
type Props = {
  value: string;
  onChangeText: any;
  placeHolder?: string;
  inputLabel?: string;
  secureTextEntry?: boolean;
  errorText?: string;
  style?: any;
};

const Input = ({
  value,
  onChangeText,
  placeHolder,
  inputLabel,
  secureTextEntry,
  errorText,
  style,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const styles = makeStyles(theme);
  return (
    <View>
      {inputLabel && <Text style={styles.inputLabelText}>{inputLabel}</Text>}
      <TextInput
        placeholderTextColor={errorText ? 'red' : '#aba9a9'}
        placeholder={errorText ? errorText : placeHolder}
        style={[styles.inputStyle, style]}
        secureTextEntry={secureTextEntry && !showPassword}
        textContentType="oneTimeCode"
        value={value}
        onChangeText={e => onChangeText(e)}
      />
      {secureTextEntry && (
        <Pressable
          onPress={() => setShowPassword(prev => !prev)}
          style={styles.showPasswordToggler}>
          {showPassword ? (
            <IonIcons name="eye" size={18} />
          ) : (
            <IonIcons name="eye-off" size={18} />
          )}
        </Pressable>
      )}
    </View>
  );
};
const makeStyles = (theme: any) =>
  StyleSheet.create({
    inputStyle: {
      backgroundColor: '#F8FAFC',
      height: 45,
      borderRadius: 8,
      padding: 8,
      paddingLeft: 14,
      width: '100%',
      ...theme.fonts.label,
      borderWidth: 0.5,
      borderColor: '#C6C6C8',
      marginTop: 12,
    },
    inputLabelText: {
      ...theme.fonts.label,
      marginBottom: 4,
      color: theme.colors.textColors.black,
    },
    showPasswordToggler: {
      position: 'absolute',
      top: 12,
      bottom: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 16,
    },
  });

export default Input;
