import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import theme from '../../theme/Theme';
import Carousel from 'react-native-reanimated-carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Onboarding() {
  const styles = makeStyles(theme);
  const width = Dimensions.get('window').width;
  const [active, setActive] = useState(0);
  const onBoardingArray = [
    {
      id: 0,
      title: 'GymerHub ile spor salonun telefonunda!',
      desc: 'Spor salonu işletmecileri ve spor salonu üyeleri artık dijital bir çatı altında birleşiyor.',
      imgSrc:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 1,
      title: 'Vücut ölçülerini kaydet!',
      desc: 'Gelişimini yakından takip et. Bu ay kendine neler kattığını tek tuşla incele.',
      imgSrc:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      title: 'GymerHub ile daha fit!',
      desc: 'Forum üzerinden topluluğa danış. Belki tecrübeli biri sana bir sır verebilir.',
      imgSrc:"https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
   

  ];
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.carouselWrapper}>
        <Carousel
          loop
          width={width}
          data={onBoardingArray}
          scrollAnimationDuration={500}
          onSnapToItem={index => setActive(index)}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Image style={styles.carouselImage} source={{uri: item.imgSrc}} />
            </View>
          )}
        />
      </View>
      <View style={styles.onboardingSheetWrapper}>
        <Text style={styles.onboardingSheetTitleText}>
          {onBoardingArray[active].title}
        </Text>
        <Text style={styles.onboardingSheetDescText}>
          {onBoardingArray[active].desc}
        </Text>
        <View style={[styles.sliderDotsWrapper]}>
          {onBoardingArray.map((item, i) => (
            <View
              key={i}
              style={[styles.sliderDots, i === active && styles.dotActive]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.skipTouchable}>
          <Text style={styles.skipTouchableText}>Bu adımı atla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const makeStyles = (theme: any) =>
  StyleSheet.create({
    pageWrapper: {
      flex: 1,
    },
    carouselWrapper: {
      flex: 0.7,
    },
    carouselImage: {
      flex: 1,
    },
    onboardingSheetWrapper: {
      flex: 0.3,
      backgroundColor: theme.colors.mainColors.gray,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      marginTop: -20,
    },
    onboardingSheetTitleText: {
      ...theme.fonts.headline_3,
      textAlign: 'center',
      color: theme.colors.mainColors.purple,
      marginTop: 24,
      lineHeight:24
    
    },
    onboardingSheetDescText: {
      ...theme.fonts.body_2,
      textAlign: 'center',
      marginTop: 4,
      marginHorizontal: 24,
    },
    sliderDotsWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 'auto',
      marginBottom: 15,
    },
    sliderDots: {
      backgroundColor: 'orange',
      width: 10,
      height: 10,
      borderRadius: 10,
      marginRight: 10,
    },
    dotActive: {
      backgroundColor: theme.colors.mainColors.purple,
      width: 10,
      height: 10,
      borderRadius: 10,
      marginRight: 10,
    },
    skipTouchable: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
    skipTouchableText: {
      ...theme.fonts.caption,
      color: theme.colors.textColors.black,
    },
  });
