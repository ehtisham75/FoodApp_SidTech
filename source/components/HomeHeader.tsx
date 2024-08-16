import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageProps, TextInput, Platform } from 'react-native'
import { Colors } from '../utils/Colors'
import { AppFonts } from '../constants/AppFonts'
import { AppImages } from '../assets/AppImages'
import { AppRoutes } from '../constants/AppRoutes'
import moment from 'moment'
import FontSize from '../screens/Styles/FontSize'

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
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
                        <Image resizeMode='contain' source={AppImages.locationIcon} style={styles.menu} />
                    </TouchableOpacity>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.greeting}>Delivering to</Text>
                    <Text numberOfLines={1} style={styles.name}>My Home</Text>
                </View>

                <View style={styles.circleBox}>

                    <TouchableOpacity onPress={() => { }}>
                        <Image resizeMode='cover' source={AppImages.bellIcon} style={styles.profileImg} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Image resizeMode='cover' source={AppImages.userIcon} style={styles.profileImg} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.blue,
        paddingTop: Platform.OS == 'ios' ? "2%" : "11%",
        paddingBottom: "4%",
        paddingHorizontal: 15,
    },
    txtStyle: {
        fontSize: 14,
        color: 'black',
        fontFamily: AppFonts.Poppins.normal,
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
        justifyContent: 'space-between',
    },
    icons: {
        alignItems: 'flex-start',
        marginTop: 8,
    },
    menu: {
        width: 25,
        height: 25,
    },
    textBox: {
        flex: 1,
        marginHorizontal: 10,
        marginLeft: 10,
        justifyContent: 'center',
    },
    greeting: {
        ...FontSize.regular12,
        color: Colors.dark_text_color,
    },
    name: {
        ...FontSize.bold16,
        color: Colors.dark_text_color,
        textAlign: 'left',
        bottom:5
    },
    circleBox: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImg: {
        width: 37,
        height: 37,
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
        fontFamily: AppFonts.Poppins.regular,
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