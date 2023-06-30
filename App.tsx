/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './src/helpers/navigation/RootNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Host} from 'react-native-portalize';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {AuthProvider} from './src/context/AuthContext';
import type {RootStackParams} from './src/types/RootStackParamsType';
import LoginRegister from './src/screens/common/login-register/LoginRegister';
import MuscleExercises from './src/screens/muscle-exercises/MuscleExercises';
import MuscleExercisesDetail from './src/screens/muscle-exercises/MuscleExercisesDetail';
import Onboarding from './src/screens/onboarding/Onboarding';
import MemberProfile from './src/screens/gym-member/profile/MemberProfile';
import MemberList from './src/screens/gym-owner/MemberList';
import GymOwnerProfile from './src/screens/gym-owner/GymOwnerProfile';
function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <SafeAreaView style={styles.safeAreaProviderStyle}>
      <AlertNotificationRoot>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer ref={navigationRef}>
            <Host>
              <AuthProvider>
                <SafeAreaProvider>
                  <Stack.Navigator
                    screenOptions={{
                      headerShown: false,
                    }}
                    initialRouteName="LoginRegister">
                    <Stack.Screen
                      name="LoginRegister"
                      component={LoginRegister}
                    />
                    <Stack.Screen
                      name="MemberProfile"
                      component={MemberProfile}
                    />
                    <Stack.Screen
                      name="GymOwnerProfile"
                      component={GymOwnerProfile}
                    />
                    <Stack.Screen name="MemberList" component={MemberList} />
                    <Stack.Screen
                      name="MuscleExercises"
                      component={MuscleExercises}
                    />
                    <Stack.Screen
                      name="MuscleExerciseDetail"
                      component={MuscleExercisesDetail}
                    />
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                  </Stack.Navigator>
                </SafeAreaProvider>
              </AuthProvider>
            </Host>
          </NavigationContainer>
        </GestureHandlerRootView>
      </AlertNotificationRoot>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaProviderStyle: {
    flex: 1,
  },
});

export default App;
