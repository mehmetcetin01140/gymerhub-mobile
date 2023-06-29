import React, { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';

interface FadeInTextProps {
  delay: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInTextProps> = ({ delay, children }) => {
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default FadeIn;