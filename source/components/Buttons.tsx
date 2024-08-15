import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../utils/Colors'
import { AppFonts } from '../constants/AppFonts'

interface ButtonProps {
    width?: any;
    height?: any;
    title: string;
    titleColor?: string;
    titleSize?: number;
    titleFontFamily?: string;
    backgroundColor: any;
    radius?: number;
    onAction: () => void;
}

const Buttons = ({ width, height, title, titleColor, titleSize, titleFontFamily, backgroundColor, radius, onAction }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => { onAction() }}
            activeOpacity={0.8}
            style={{
                ...styles.button,
                width: width ?? "80%",
                height: height ?? 42,
                backgroundColor: backgroundColor ?? Colors.primary_color,
                borderRadius: radius ?? 16,
            }}>

            <Text style={{
                fontSize: titleSize ?? 17,
                color: titleColor ?? Colors.white_text_color,
                fontFamily: titleFontFamily ?? AppFonts.Inter.normal
            }}>{title}</Text>

        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    button: {
        // height: "7%",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: "2%",
    },
    buttonTitle: {
        // marginTop: "2%",
    }
})