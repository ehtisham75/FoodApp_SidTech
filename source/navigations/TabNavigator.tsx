import React from 'react'
import { Platform, StyleSheet, Image, Text, View } from 'react-native'
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
import FontSize from '../screens/Styles/FontSize';
import { screenHeight } from '../screens/Styles/ScreenSize';

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
                },
                tabBarLabelStyle: {
                    textAlign: 'center',
                    ...FontSize.bold10,
                    // color:
                }
            }}>

            <Tab.Screen name={AppRoutes.home} component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Image source={AppImages.homeTabIcon}
                                    style={{ ...styles.tabIcon, tintColor: focused ? Colors.black : Colors.dark_text_color }}
                                />
                                <Text style={{
                                    ...FontSize.bold10,
                                    color: focused ? Colors.black : Colors.dark_text_color
                                }}>Home</Text>
                            </>
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.activitiesTab} component={ActivitiesScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Image source={AppImages.activitiesTabIcon}
                                    style={{ ...styles.tabIcon, tintColor: focused ? Colors.black : Colors.dark_text_color }}
                                />
                                <Text style={{
                                    ...FontSize.bold10,
                                    color: focused ? Colors.black : Colors.dark_text_color
                                }}>Activities</Text>
                            </>
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.cartTab} component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <View style={styles.cartIcon}>
                                    <Image source={AppImages.cartTabIcon}
                                        style={{ ...styles.tabIcon, transform: [{ rotate: '-45deg' }] }}
                                    />
                                </View>

                                <Text style={{
                                    ...FontSize.bold10,
                                    color: focused ? Colors.black : Colors.dark_text_color,
                                    top: -15
                                }}>Cart</Text>
                            </>
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.messageTab} component={MessageScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Image source={AppImages.messageTabIcon}
                                    style={{ ...styles.tabIcon, tintColor: focused ? Colors.black : Colors.dark_text_color }}
                                />
                                <Text style={{
                                    ...FontSize.bold10,
                                    color: focused ? Colors.black : Colors.dark_text_color
                                }}>Message</Text>
                            </>
                        )

                    },
                }}
            />

            <Tab.Screen name={AppRoutes.profileTab} component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                <Image source={AppImages.profileTabIcon}
                                    style={{ ...styles.tabIcon, tintColor: focused ? Colors.black : Colors.dark_text_color }}
                                />
                                <Text style={{
                                    ...FontSize.bold10,
                                    color: focused ? Colors.black : Colors.dark_text_color
                                }}>Profile</Text>
                            </>
                        )

                    },
                }}
            />

        </Tab.Navigator >
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    cartIcon:{
        backgroundColor: Colors.black,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        top: -screenHeight.height3,
        transform: [{ rotate: '45deg' }] 
    }
})