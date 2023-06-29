import {View, Text, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import theme from '../../../theme/Theme';
import ProfileCard from '../../../components/cards/ProfileCard';
import Input from '../../../components/form-elements/Input';
import Button from '../../../components/ui-elements/Button';
import Header from '../../../components/header/Header';

const MemberProfile = () => {
  const styles = makeStyles(theme);

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.headerWrapper}>
        <Header title="Profil Bilgileri" />
      </View>
      <ProfileCard />
      <View style={styles.inputWrapper}>
        <Text style={styles.profileTitle}>Profil Bilgileri</Text>

        <View style={styles.row}>
          <View style={[styles.col, {marginRight: 8}]}>
            <Input
              value="Mehmet"
              inputLabel="Ad"
              style={styles.resetInputMargin}
            />
          </View>
          <View style={styles.col}>
            <Input
              value="Çetin"
              inputLabel="Soyad"
              style={styles.resetInputMargin}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, {marginRight: 8}]}>
            <Input
              value="05424419907"
              inputLabel="Telefon Numarası"
              style={styles.resetInputMargin}
            />
          </View>
          <View style={styles.col}>
            <Input
              value="Gym Inn"
              inputLabel="Gym Adı"
              style={styles.resetInputMargin}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Input
              value="mehmetcetin01140@hotmail.com"
              inputLabel="Email Adresi"
              style={styles.resetInputMargin}
            />
          </View>
        </View>
        <Button buttonText="Kaydet" styleProps={styles.buttonStyle} />
      </View>
    </View>
  );
};

export default MemberProfile;

const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
      paddingVertical: 6,
      backgroundColor: '#FFFFFF',
    },
    headerWrapper: {
      marginHorizontal: 16,
    },
    profileTitle: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.textColors.purple,
      marginBottom: 12,
    },
    inputWrapper: {
      paddingHorizontal: 16,
      marginTop: 8,
      flex:1
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    col: {
      flex: 1,
    },

    resetInputMargin: {
      marginTop: 0,
    },
    buttonStyle: {
      backgroundColor: '#6366F3',
      marginTop: "auto",
      marginBottom:24
    },
  });
