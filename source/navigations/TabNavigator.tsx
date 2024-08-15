import React from 'react'
import { Platform, StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../utils/Colors';
import { AppRoutes } from '../constants/AppRoutes';
// ========== Screens ==============
import HomeScreen from '../screens/Home/HomeScreen';
import ActivitiesScreen from '../screens/activities/ActivitiesScreen';
import CartScreen from '../screens/cart/CartScreen';
import MessageScreen from '../screens/message/MessageScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
// ========== ICONS ==============
import TabHomeIcon from '../components/SvgIcons/TabHomeIcon';
import TabProfileIcon from '../components/SvgIcons/TabProfileIcon';
import TabChatIcon from '../components/SvgIcons/TabChatIcon';
import TabNotificationIcon from '../components/SvgIcons/TabNotificationIcon';
import { AppImages } from '../assets/AppImages';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const activeIconColor = Colors.black;
    const inActiveIconColor = Colors.secondary_color;
    const activeIconSize = 20;
    const inActiveIconSize = 20;

    return (
        <Tab.Navigator
            // initialRouteName={AppRoutes.home}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                // tabBarLabel:false,
                tabBarStyle: {
                    height: Platform.OS == 'ios' ? 80 : 60,
                    backgroundColor: Colors.primary_color,
                    paddingHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}>

            <Tab.Screen name={AppRoutes.home} component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabHomeIcon
                                color={focused ? activeIconColor : inActiveIconColor}
                                size={focused ? activeIconSize : inActiveIconSize}
                            />
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.activitiesTab} component={ActivitiesScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabProfileIcon
                                color={focused ? activeIconColor : inActiveIconColor}
                                size={focused ? activeIconSize : inActiveIconSize}
                            />
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.cartTab} component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabChatIcon
                                color={focused ? activeIconColor : inActiveIconColor}
                                size={focused ? activeIconSize : inActiveIconSize}
                            />
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.messageTab} component={MessageScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                           <Image
                           source={AppImages.messageTabIcon}
                           style={{width: activeIconSize,height:activeIconSize}}
                           />
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.profileTab} component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabNotificationIcon
                                color={focused ? activeIconColor : inActiveIconColor}
                                size={focused ? activeIconSize : inActiveIconSize}
                            />
                        )

                    },
                }}
            />

        </Tab.Navigator >
    )
}

export default TabNavigator

const styles = StyleSheet.create({})