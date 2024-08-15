import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageProps, TextInput, Platform } from 'react-native'
import { Colors } from '../utils/Colors'
import { AppFonts } from '../constants/AppFonts'
import { AppImages } from '../assets/AppImages'
import { AppRoutes } from '../constants/AppRoutes'
import moment from 'moment'

type headerProps = {
    // greatings: string;
    userImage?: ImageProps;
    userTitle?: string;
    titleColor?: string;
    backgroundColor?: string,
    onProfileAction?: () => void;
    onSearchAction?: () => void;
    onMenuAction?: () => void;
    IsMenuVisible?: boolean;
    IsMenuHide?: () => void;
    navigation: any
}

const HomeHeader = ({ userImage, userTitle, titleColor, onProfileAction, onSearchAction, onMenuAction, IsMenuVisible, IsMenuHide, navigation }: headerProps) => {
    const [searchText, setSearchText] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleSubmit = () => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.icons}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image resizeMode='contain' source={AppImages.locationIcon} style={styles.menu} />
                    </TouchableOpacity>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.greeting}>Delivering to</Text>
                    <Text numberOfLines={1} style={styles.name}>My Home</Text>
                </View>

                <TouchableOpacity onPress={() => { }}>
                    <Image resizeMode='cover' source={AppImages.bellIcon} style={styles.profileImg} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Image resizeMode='cover' source={AppImages.userIcon} style={styles.profileImg} />
                </TouchableOpacity>

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