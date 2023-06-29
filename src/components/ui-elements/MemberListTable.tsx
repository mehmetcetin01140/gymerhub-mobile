import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-reanimated-table';
import theme from '../../theme/Theme';
import ModalTester from '../modal/Modal';

interface ExampleFourState {
  tableHead: string[];
  tableData: string[][];
}

const MemberListTable: React.FC = () => {
  const styles = makeStyles(theme);
  const [state, setState] = useState<ExampleFourState>({
    tableHead: ['Ad Soyad', 'Durum', 'Daha Fazla'],
    tableData: [
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
    ],
  });

  const _alertIndex = (index: number) => {
    Alert.alert(`This is row ${index + 1}`);
  };

  const profileItem = (data: string, index: number) => (
    <TouchableOpacity
      onPress={() => _alertIndex(index)}
      style={styles.alignCenter}>
      <View style={styles.profilePicWrapper}>
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
          }}
        />
      </View>
      <Text style={styles.nameSurnameText}>Mehmet Çetin</Text>
    </TouchableOpacity>
  );
  const returnStatus = (data: string, index: number) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={[
          styles.statusWrapper,
          {backgroundColor: data?.status ? '#ECF6E9' : '#FEE3E2'},
        ]}>
        <Text
          style={[
            styles.statusText,
            {color: !data?.status ? '#982B39' : '#46903A'},
          ]}>
          Geçti
        </Text>
      </View>
    </View>
  );
  const returnMore = (data: string, index: number) => <ModalTester />;

  const {tableHead, tableData} = state;

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderColor: 'transparent'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <ScrollView>
          {tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={
                    (cellIndex === 0 && profileItem(cellData, index)) ||
                    (cellIndex === 1 && returnStatus(cellData, index)) ||
                    (cellIndex === 2 && returnMore(cellData, index))
                  }
                  textStyle={styles.text}></Cell>
              ))}
            </TableWrapper>
          ))}
          <View style={{height: 60}} />
        </ScrollView>
      </Table>
    </View>
  );
};

const makeStyles = (theme: any) =>
  StyleSheet.create({
    container: {flex: 1, paddingTop: 12, backgroundColor: '#fff'},
    head: {
      height: 40,
      backgroundColor: '#F5F6F8',
      marginBottom: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {...theme.fonts.subtitle_2, margin: 6, textAlign: 'center'},
    row: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      paddingVertical: 12,
      borderBottomWidth: 2,
      borderBottomColor: '#F5F6F8',
    },

    profilePicWrapper: {
      width: 45,
      height: 45,
      borderRadius: 30,
    },
    profilePic: {
      flex: 1,
      borderRadius: 30,
    },
    nameSurnameText: {
      marginTop: 4,
      ...theme.fonts.caption,
      fontWeight: '600',
      textAlign: 'center',
    },
    statusWrapper: {
      width: '80%',
      marginHorizontal: 'auto',
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    statusText: {
      ...theme.fonts.subtitle_2,
    },
    alignCenter: {
      alignItems: 'center',
    },
  });

export default MemberListTable;
