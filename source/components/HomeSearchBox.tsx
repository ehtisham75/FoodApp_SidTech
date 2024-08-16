import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppImages } from '../assets/AppImages'
import FontSize from '../screens/Styles/FontSize'
import { Colors } from '../utils/Colors'

type searchBoxProps = {
    // navigation: any,
    onAction: () => void;
}
const HomeSearchBox = ({ onAction }: searchBoxProps) => {
    return (
        <TouchableOpacity style={styles.searchBox} activeOpacity={0.7} onPress={() => onAction && onAction()}>
            <View style={styles.searchLeft}>
                <Image source={AppImages.searchIcon} style={{ width: 20, height: 20 }} />
            </View>

            <View style={styles.searchCenter}>
                <Text style={FontSize.regular14}>What do you want to eat?</Text>
            </View>

            <View style={styles.searchRight}>
                <Image source={AppImages.voiceIcon} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
            </View>
        </TouchableOpacity>
    )
}

export default HomeSearchBox

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.gray30,
        backgroundColor: Colors.gray10,
        marginHorizontal: 15,
        borderRadius: 15,
        paddingHorizontal: "5%",
        paddingVertical: 14,
    },
    searchLeft: {},
    searchCenter: {
        flex: 1,
        marginHorizontal: 15,
        // backgroundColor: 'red',
        borderRightWidth: 1,
        borderRightColor: Colors.gray30
    },
    searchRight: {},
})