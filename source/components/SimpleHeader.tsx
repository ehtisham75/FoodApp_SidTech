import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import { Colors } from '../utils/Colors'
import { AppFonts } from '../constants/AppFonts'
import { AppImages } from '../assets/AppImages'

type headerProps = {
    ScreenTitle: string;
    bgColor?: string,
    titleColor?: string;
    onBackPress: () => void;
}

const SimpleHeader = ({ ScreenTitle, onBackPress, bgColor, titleColor }: headerProps) => {
    return (
        <View style={{ ...styles.container, backgroundColor: bgColor ?? Colors.primary_color, }}>
            <View style={styles.box}>

                <View style={styles.backIconWrap}>
                    <TouchableOpacity onPress={() => { onBackPress() }} style={styles.backWrap}>
                        <Image resizeMode='contain' source={AppImages.backIcon} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.textBox}>
                    <Text style={{ ...styles.titleText, color: titleColor ?? Colors.white_text_color, }}>{ScreenTitle}</Text>
                </View>
            </View>
        </View >
    )
}

export default SimpleHeader

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'ios' ? "15%" : "13%",
        paddingBottom: "5%",
        paddingHorizontal: 20,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'plum',
    },
    backIconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 100,
        backgroundColor: Colors.tertiary_color,
    },
    backWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        left: -1.7,
        // borderRadius: 100,
        // backgroundColor: Colors.blue,
    },
    backIcon: {
        width: 18,
        height: 18,
    },
    textBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 10,
        // backgroundColor: 'cyan',
    },
    titleText: {
        fontSize: 20,
        fontFamily: AppFonts.Inter.bold,
        marginLeft: "-9%",
    },
})