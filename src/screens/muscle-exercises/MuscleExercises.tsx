import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import ExerciseDataForBodyHighlighter from '../../json-data/ExerciseDataForBodyHighlighter.json';
import React, {useState} from 'react';
import theme from '../../theme/Theme';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Header';
import Input from '../../components/form-elements/Input';

type ExerciseItem = {
  id: number;
  title: string;
};

type Props = {};

export default function MuscleExercises({}: Props) {
  const [searchParam, setSearchParam] = useState<string>('');
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const filteredList = ExerciseDataForBodyHighlighter.filter(filteredItem =>
    filteredItem.title.toLowerCase().includes(searchParam.toLowerCase()),
  );
  const renderItem = ({item}: {item: ExerciseItem}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('MuscleExerciseDetail', {
            id: item.id,
            title: item.title,
          })
        }
        style={styles.itemWrapper}>
        <Text style={styles.itemTextStyle}>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.pageWrapper}>
      <Header title="Egzersiz Hareketleri" />
      <View style={styles.searchInputWrapper}>
        <Input
          value={searchParam}
          onChangeText={setSearchParam}
          placeHolder="Egzersiz hareketi ara..."
        />
      </View>
      {filteredList.length > 0 ? (
        <FlatList
          data={filteredList}
          renderItem={renderItem}
          keyExtractor={(item: ExerciseItem) => item.id.toString()}
        />
      ) : (
        <Text style={styles.infoText}>
          Aramanızla eşleşen bir sonuç bulamadık.
        </Text>
      )}
    </View>
  );
}

const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
      paddingHorizontal: 16,
    },
    searchInputWrapper: {
      marginBottom: 16,
    },
    itemWrapper: {
      width: '100%',
      padding: 14,
      backgroundColor: theme.colors.mainColors.purple,
      marginBottom: 8,
      borderRadius: 12,
    },
    itemTextStyle: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.textColors.white,
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    infoText: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.textColors.black,
      textAlign: 'center',
    },
  });
