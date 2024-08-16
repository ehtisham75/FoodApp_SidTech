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
    border?: boolean;
    onAction: () => void;
}

const Buttons = ({ width, height, title, titleColor, titleSize, titleFontFamily, backgroundColor, radius, border, onAction }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => { onAction() }}
            activeOpacity={0.5}
            style={{
                ...styles.button,
                width: width ?? "80%",
                height: height ?? 42,
                backgroundColor: backgroundColor ?? Colors.secondary_color,
                borderRadius: radius ?? 16,
                borderWidth: border ? 2 : 0,
                borderColor: Colors.black
            }}>

            <Text style={{
                fontSize: titleSize ?? 14,
                color: titleColor ?? Colors.black_text_color,
                fontFamily: titleFontFamily ?? AppFonts.Poppins.regular
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