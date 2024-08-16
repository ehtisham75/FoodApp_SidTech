import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import { Colors } from '../utils/Colors'
import { AppFonts } from '../constants/AppFonts'
import { AppImages } from '../assets/AppImages'
import BackIcon from './SvgIcons/BackIcon'
import FontSize from '../screens/Styles/FontSize'
import { screenWidth } from '../screens/Styles/ScreenSize'

type headerProps = {
    ScreenTitle: string;
    titleColor?: string;
    onBackPress: () => void;
}

const SimpleHeader = ({ ScreenTitle, onBackPress, titleColor }: headerProps) => {
    return (
        <View style={{ ...styles.container }}>
            <View style={styles.box}>

                <View style={styles.backIconWrap}>
                    <TouchableOpacity onPress={() => onBackPress && onBackPress()} style={styles.backWrap}>
                        <Image resizeMode='contain' source={AppImages.backIcon} style={styles.backIcon} />
                        <Text style={{ ...styles.backText }}>Back</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textBox}>
                    <Text style={{ ...styles.titleText, color: titleColor ?? Colors.black_text_color, }}>{ScreenTitle}</Text>
                </View>
            </View>
        </View >
    )
}

export default SimpleHeader

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'ios' ? "13%" : "10%",
        paddingBottom: "3%",
        paddingHorizontal: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'cyan',
    },
    backIconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        // backgroundColor: 'red',
    },
    backWrap: {
        // alignItems: 'center',
        justifyContent: 'center',
        // padding: 3,
        // backgroundColor: 'plum',
        flexDirection: 'row',
    },
    backIcon: {
        width: 18,
        height: 18,
    },
    backText:{
        ...FontSize.regular14,
        marginLeft: 5,
    },
    textBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 10,
        // backgroundColor: 'green',
    },
    titleText: {
        ...FontSize.bold20,
        marginLeft: -screenWidth.width16,
    },
})