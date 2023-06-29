import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '../../theme/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
type Props = {
  title?: string;
};

export default function Header({title}: Props) {
  const navigation = useNavigation();
  const styles = makeStyles(theme);

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name='chevron-left' size={16}/>
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

const makeStyles = (theme: any) =>
  StyleSheet.create({
    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      height:60,
     
    },
    backButton: {
      position: 'absolute',
      left: 10,
      justifyContent: 'center',
      width:30,
      height: '100%',
      zIndex:33
    },
    backText: {
      textAlign: 'center',
    },
    titleText: {
      flex: 1,
      textAlign: 'center',
      ...theme.fonts.subtitle_2,
      color:theme.colors.textColors.black,
    },
  });
