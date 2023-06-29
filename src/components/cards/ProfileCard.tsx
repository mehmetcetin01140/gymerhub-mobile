import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {useState, Dispatch, SetStateAction} from 'react';
import theme from '../../theme/Theme';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
const ProfileCard = ({}) => {
  const styles = makeStyles(theme);
  const memberShipType = false
  return (
    <View style={styles.cardWrapper}>
      {
        memberShipType ? (

      <View style={styles.profilePicWrapper}>
        <Text style={styles.profilePicText}>MÇ</Text>
      </View>
        ) : (
          <QRCode
          value="http://awesome.link.qr"
        />
        )
      }
      <Text style={styles.nameSurnameText}>GYM INN</Text>
      <Text style={styles.registrationDateText}>Katıldığı Tarih: 01.12.2023</Text>
      <Text style={styles.registrationDateDetailText}>( 1 ay önce )</Text>
    </View>
  );
};
const makeStyles = (theme: any) =>
  StyleSheet.create({
    cardWrapper: {
      width: '100%',
      height: 185,
      alignItems: 'center',
      padding: 24,
      paddingTop:0,
    },
    profilePicWrapper: {
      width: 80,
      height: 80,
      borderRadius: 60,
      backgroundColor: '#D9D1F8',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2.22,

      elevation: 3,
    },
    profilePicText: {
      ...theme.fonts.subtitle_1,
    },
    nameSurnameText: {
      ...theme.fonts.headline_3,
      marginTop: 12,
    },
    registrationDateText: {
        ...theme.fonts.label,
        marginTop: 8,
      },
      registrationDateDetailText: {
        ...theme.fonts.overline,
        marginTop: 8,
      },
  });

export default ProfileCard;
