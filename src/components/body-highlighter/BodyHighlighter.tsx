import {View} from 'react-native';
import Body from 'react-native-body-highlighter';

type Props = {
  data: Root;
  id: number;
};
export type Root = Root2[];

export interface Root2 {
  id: number;
  id_num: string;
  id_hex: string;
  name: string;
  title: string;
  url: string;
  primer: string;
  type?: string;
  primary?: string;
  secondary?: string[];
  equipment?: string[];
  images: string[];
  img?: string[];
  steps: string[];
  tips?: string[];
  intensity?: number; 
}

export default function BodyHighlighter({data, id}: Props) {
  const convertDataById = (id: number) => {
    const item = data.find(item => item.id === id);
    if (!item) {
      return [];
    }
  
    const replaceSlug = (slug: string) => {
   
        if (slug === 'rear deltoid') {
          return 'back-deltoids';
        } else if (slug === 'lateral deltoid') {
          return 'front-deltoids';
        } else if (slug.includes('abdominals')) {
          return 'abs';
        } else if (slug === 'hamstrings') {
          return 'hamstring';
        } else if (slug === 'glutes') {
          return 'gluteal';
        } else if (slug.includes('shoulders')) {
          return 'front-deltoids';
        } else if (slug.includes('neck')) {
          return 'neck';
        } else if (slug === 'lower back') {
          return 'lower-back';
        } else if (slug === 'upper back' || slug === 'middle back') {
          return 'upper-back';
        }
  
        return slug
    
    };
  
    const convertedItem = [
      {
        slug: replaceSlug(item.primary || ''),
        intensity: item.intensity || 1,
        color: ''
      },
      ...(item.secondary || []).map(secondaryItem => ({
        slug: replaceSlug(secondaryItem),
        intensity: 1,
        color: ''
      })),
    ];
  
    return convertedItem.length > 0 ? convertedItem : null;
  };

  const convertedData = convertDataById(id) || [];
  console.log(convertedData)    

  return (
    <View>
      <Body data={convertedData} />
    </View>
  );
}
