import { Dimensions } from "react-native";

const theme = {
    colors:{
        mainColors:{
            gray:"#F8FAFC",
            white:"#FFFFFF",
            blue:"#0F41C2",
            black:"#1F2431",
            purple:"#5E35B1"
        },
        textColors:{
            blue:"#241C4E",
            gray:"#aba9a9",
            white:"#FFFFFF",
            black:"#000000",
            purple:"#5E35B1"
        },
        borderColors:{
          gray:"#aba9a9"
        }
       
    },
    fonts: {
        headline_1: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 33,
        },
        headline_2: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 23,
        },
        headline_3: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 19,
        },
        headline_4: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 17,
        },
        subtitle_1: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 15,
        },
        subtitle_2: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 13,
        },
        label: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 12,
        },
        body_1: {
          fontFamily: 'Poppins-Regular',
          fontWeight: '400',
          fontSize: 15,
        },
        body_2: {
          fontFamily: 'Poppins-Regular',
          fontWeight: '400',
          fontSize: 13,
        },
        button_1: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 16,
        },
        button_2: {
          fontFamily: 'Poppins-Medium',
          fontWeight: '500',
          fontSize: 13,
        },
        caption: {
          fontFamily: 'Poppins-Regular',
          fontWeight: '400',
          fontSize: 12,
        },
        overline: {
          fontFamily: 'Poppins-Regular',
          fontWeight: '400',
          fontSize: 10,
        },
      },
    sizes:{
        w: Dimensions.get('screen').width,
        h: Dimensions.get('screen').height,
    }
    
}
export default theme