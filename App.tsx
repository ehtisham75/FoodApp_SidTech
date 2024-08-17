import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
// =============== Routes =================
import { AppRoutes } from './source/constants/AppRoutes';
// =============== Navigations ==============
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// =============== Screens ================
import TabNavigator from './source/navigations/TabNavigator';
import SearchScreen from './source/screens/search/SearchScreen';
import ProductDetailScreen from './source/screens/productDetails/ProductDetailScreen';

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
        // initialRouteName={AppRoutes.onboard}
        screenOptions={{ headerShown: false }}
      >
        {/* ============== Home =============== */}
        <Stack.Screen name={AppRoutes.bottomTab} component={BottomTabNavigator} />
        <Stack.Screen name={AppRoutes.searchScreen} component={SearchScreen} />
        <Stack.Screen name={AppRoutes.productDetail} component={ProductDetailScreen} />

        {/* ============== Settings =============== */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
