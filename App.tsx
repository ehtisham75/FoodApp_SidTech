import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
// =============== Routes =================
import { AppRoutes } from './source/constants/AppRoutes';
// =============== Navigations ==============
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// =============== Screens ================
import TabNavigator from './source/navigations/TabNavigator';
import MainOnboardScreen from './source/screens/welcome/MainOnboardScreen';

const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <TabNavigator />
  );
};

const App = () => {

  const navigationRef = useNavigationContainerRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 2000);
  // }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={AppRoutes.onboard}
        screenOptions={{ headerShown: false }}
      >

        {/* ============== Welcome =============== */}
        {/* <Stack.Screen name={AppRoutes.onboard} component={MainOnboardScreen} /> */}

        {/* ============== Auth =============== */}

        {/* ============== Home =============== */}
        <Stack.Screen name={AppRoutes.bottomTab} component={BottomTabNavigator} />

        {/* ============== Settings =============== */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
