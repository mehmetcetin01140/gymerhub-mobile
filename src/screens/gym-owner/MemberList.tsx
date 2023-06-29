import {View, Text, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import theme from '../../theme/Theme';
import MemberListTable from '../../components/ui-elements/MemberListTable';
import Input from '../../components/form-elements/Input';
import Header from '../../components/header/Header';
import {ScrollView} from 'react-native-gesture-handler';
import ModalTester from '../../components/modal/Modal';

const MemberList = () => {
  const styles = makeStyles(theme);

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.headerWrapper}>
        <Header title="Üye Listesi" />
        <Input placeHolder="Üye ara..." />
      </View>

      <MemberListTable />
    </View>
  );
};

export default MemberList;

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
  });
