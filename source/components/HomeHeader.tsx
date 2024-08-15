import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageProps, TextInput, Platform } from 'react-native'
import { Colors } from '../utils/Colors'
import { AppFonts } from '../constants/AppFonts'
import { AppImages } from '../assets/AppImages'
import { AppRoutes } from '../constants/AppRoutes'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import moment from 'moment'

type headerProps = {
    // greatings: string;
    userImage: ImageProps;
    userTitle: string;
    titleColor?: string;
    backgroundColor?: string,
    onProfileAction: () => void;
    onSearchAction: () => void;
    onMenuAction: () => void;
    IsMenuVisible: boolean;
    IsMenuHide: () => void;
    navigation: any
}

const HomeHeader = ({ userImage, userTitle, titleColor, onProfileAction, onSearchAction, onMenuAction, IsMenuVisible, IsMenuHide, navigation }: headerProps) => {
    const [searchText, setSearchText] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentTime = moment();
        const currentHour = currentTime.hour();

        if (currentHour >= 4 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Night');
        }
    }, []);

    const handleSubmit = () => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => { onMenuAction() }}>
                        <Image resizeMode='contain' source={AppImages.menuIcon} style={styles.menu} />
                    </TouchableOpacity>

                    {/* ======== Pop up Menu ========== */}
                    <View>
                        <Menu
                            visible={IsMenuVisible}
                            style={{ borderRadius: 10, paddingTop: 10 }}
                            onRequestClose={() => { IsMenuHide && IsMenuHide(); }}>

                            <View style={styles.menuContainer}>
                                <MenuItem style={styles.menuItemStyle} textStyle={styles.txtStyle}
                                    onPress={() => { IsMenuHide && IsMenuHide(); navigation.navigate(AppRoutes.About) }}
                                >About</MenuItem>
                            </View>

                            <View style={styles.menuContainer}>
                                <MenuItem style={styles.menuItemStyle} textStyle={styles.txtStyle}
                                    onPress={() => { IsMenuHide && IsMenuHide(); navigation.navigate(AppRoutes.settings) }}
                                >Settings</MenuItem>
                            </View>

                            <View style={styles.menuContainer}>
                                <MenuItem style={styles.menuItemStyle} textStyle={styles.txtStyle}
                                    onPress={() => { IsMenuHide && IsMenuHide(); navigation.navigate(AppRoutes.termConditions) }}
                                >Terms & Conditions</MenuItem>
                            </View>

                            <View style={styles.menuContainer}>
                                <MenuItem style={styles.menuItemStyle} textStyle={styles.txtStyle}
                                    onPress={() => { IsMenuHide && IsMenuHide(); navigation.navigate(AppRoutes.privacyPolicy) }}
                                >Privacy & Policy</MenuItem>
                            </View>
                        </Menu >
                    </View>

                </View>

                <View style={styles.textBox}>
                    <Text style={styles.greeting}>{greeting}</Text>
                    <Text numberOfLines={1} style={styles.name}>{userTitle}</Text>
                </View>

                <TouchableOpacity onPress={() => { onProfileAction() }}>
                    <Image resizeMode='cover' source={userImage} style={styles.profileImg} />
                </TouchableOpacity>

            </View>

            <View style={styles.searchBox}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor={Colors.gray40}
                        value={searchText}
                        onChangeText={setSearchText}
                        onSubmitEditing={handleSubmit}
                        style={styles.searchInput}
                    />
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => { onSearchAction && onSearchAction() }}>
                        <Image resizeMode='contain' source={AppImages.searchIcon} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white_background,
        paddingTop: Platform.OS == 'ios' ? "2%" : "11%",
        paddingBottom: "4%",
        paddingHorizontal: 25,
    },
    txtStyle: {
        fontSize: 14,
        color: 'black',
        fontFamily: AppFonts.Inter.normal,
    },
    menuItemStyle: {
        height: 35,
        justifyContent: 'center',
        marginLeft: 5,
    },
    menuContainer: {
        marginBottom: 1,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'plum',
    },
    icons: {
        alignItems: 'flex-start',
        marginTop: 8,
        // backgroundColor: 'cyan',
    },
    menu: {
        width: 25,
        height: 25,
        tintColor: Colors.primary_color,
    },
    textBox: {
        marginHorizontal: 10,
        marginLeft: 14,
        flex: 1,
    },
    greeting: {
        fontSize: 15,
        color: Colors.tertiary_color,
        fontFamily: AppFonts.Inter.regular,
    },
    name: {
        fontSize: 20,
        color: Colors.tertiary_color,
        fontFamily: AppFonts.Inter.bold,
        textAlign: 'left',
    },
    profileImg: {
        width: 48,
        height: 48,
        borderRadius: 100,
    },
    searchBox: {
        flexDirection: 'row',
        height: 42,
        backgroundColor: Colors.gray30,
        borderRadius: 15,
        marginTop: 15,
    },
    inputContainer: {
        flex: 1,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: Colors.primary_color,
        fontFamily: AppFonts.Inter.regular,
        paddingHorizontal: 10,
        paddingLeft: 20,
    },
    iconContainer: {
        backgroundColor: Colors.primary_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
})