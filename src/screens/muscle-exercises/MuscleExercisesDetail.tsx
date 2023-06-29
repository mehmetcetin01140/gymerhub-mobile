import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ExerciseDataForBodyHighlighter from '../../json-data/ExerciseDataForBodyHighlighter.json';
import React, {useState} from 'react';
import theme from '../../theme/Theme';
import BodyHighlighter from '../../components/body-highlighter/BodyHighlighter';
import Header from '../../components/header/Header';
import WebView from 'react-native-webview';
import Button from '../../components/ui-elements/Button';
type Props = {};

export default function MuscleExercisesDetail({route}: Props) {
  const styles = makeStyles(theme);
  const [isYouTubeActive,setIsYouTubeActive] = useState<boolean>(false)
  const params = route?.params;
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    params.title,
  )}`;
  return (
    <ScrollView style={styles.pageWrapper}>
      <View style={styles.headerWrapper}>

      <Header title='Egzersiz Detayı'/>
      </View>
      <Text style={styles.titleTextStyle}>{params.title}</Text>
      <View style={styles.bodyHighlighterWrapper}>
        {params.id && (
          <BodyHighlighter
            data={ExerciseDataForBodyHighlighter}
            id={params.id}
          />
        )}
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.contentDescTextStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima
        </Text>
        <View style={styles.buttonWrapper}>
          <Button buttonText="Kaydet" styleProps={{width: '25%'}} />
          <Button buttonText="Paylaş" styleProps={{width: '25%'}} />
          <Button onPress={()=>setIsYouTubeActive((prev)=>!prev)} buttonText="Youtube" styleProps={{width: '25%'}} />
        </View>
      </View>
      {
        isYouTubeActive && (
          
      <View style={{width: '100%', height: 800  }}>
        <WebView source={{uri: searchUrl}} />
      </View>
        )
      }
    </ScrollView>
  );
}
const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
    },
    headerWrapper:{
      paddingHorizontal:16
    },
    bodyHighlighterWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
    },
    contentWrapper: {
      padding: 16,
    },
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 16,
    },
    titleTextStyle: {
      ...theme.fonts.subtitle_1,
      color: theme.colors.textColors.blue,
      marginLeft: 16,
      marginTop: 16,
    },
    contentDescTextStyle: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.textColors.black,
      marginTop: 6,
    },
  });
