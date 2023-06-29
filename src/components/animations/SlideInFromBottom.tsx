import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleProp, ViewStyle} from 'react-native';

interface SlideInFromBottomProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SlideInFromBottom: React.FC<SlideInFromBottomProps> = ({
  children,
  style,
}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 400, 
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <Animated.View style={[{transform: [{translateY}]}, style]}>
      {children}
    </Animated.View>
  );
};

export default SlideInFromBottom;
