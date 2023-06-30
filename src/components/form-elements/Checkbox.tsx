import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AntDesignSvg from 'react-native-vector-icons/AntDesign';
import theme from '../../theme/Theme';
import BottomSheet from '../ui-elements/BottomSheet';

type CheckboxProps = {
  checked: boolean;
  checkboxPress?: () => void;
};
interface IHandles {
  open: () => void;
  close: () => void;
}
const Checkbox: React.FC<CheckboxProps> = ({checked, checkboxPress}) => {
  const styles = makeStyles(theme);

  const bottomSheetRef = useRef<IHandles>(null);

  const handleCheckboxPress = () => {
    checkboxPress && checkboxPress();
  };
  const openLegalTextBottomSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };
  return (
    <>
      <BottomSheet ref={bottomSheetRef}>
        <Text style={styles.legalTextTitle}>Üyelik Sözleşmesi</Text>
        <Text style={styles.legalTextContent}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          laborum vel veritatis commodi, dolores cupiditate dignissimos
          voluptatibus accusamus consequuntur necessitatibus illo ex, illum hic?
          Tempore nesciunt sequi placeat ea distinctio?
        </Text>
      </BottomSheet>
      <View style={styles.checkboxWrapper}>
        <TouchableOpacity onPress={handleCheckboxPress}>
          <View
            style={[
              styles.checkbox,
              {
                borderColor: checked
                  ? '#43a047'
                  : 'red',
              },
            ]}>
            {checked && (
              <AntDesignSvg name={'checksquare'} size={17} color={'#43a047'} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openLegalTextBottomSheet}>
          <Text style={styles.legalText}>
            <Text style={styles.underlineText}>Üyelik sözleşmesini</Text> okudum
            ve onaylıyorum.
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const makeStyles = (theme: any) =>
  StyleSheet.create({
    checkboxWrapper: {
      flexDirection: 'row',
      marginVertical: 12,
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1.5,
    },
    legalText: {
      marginLeft: 8,
      ...theme.fonts.label,
      color: theme.colors.textColors.black,
    },
    underlineText: {
      textDecorationLine: 'underline',
    },
    legalTextTitle: {
      ...theme.fonts.headline_3,
      textAlign: 'center',
      marginBottom: 8,
    },
    legalTextContent: {
      ...theme.fonts.caption,
    },
  });

export default Checkbox;
