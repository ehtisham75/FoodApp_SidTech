import { StyleSheet, Image, View, SafeAreaView, TextInput, ImageProps, } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors';
import { AppImages } from '../assets/AppImages';
import { AppFonts } from '../constants/AppFonts';

interface TextInputProps {
    inputIcon: ImageProps;
    keyboardType?: any;
    autoCapitalize?: any;
    placeholder?: string;
    placeHolderColor?: string;
    value: any;
    onChangeText: any;
    containerStyle?: any;
    textInputStyle?: any;
    secureType?: any;
}

const TextInputs = ({
    inputIcon,
    keyboardType,
    autoCapitalize,
    placeholder,
    placeHolderColor,
    value,
    onChangeText,
    containerStyle,
    textInputStyle,
    secureType,
}: TextInputProps) => {

    return (
        <SafeAreaView style={containerStyle}>
            <View style={styles.inputBox}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={inputIcon}
                />
                <TextInput
                    // showSoftInputOnFocus
                    keyboardType={keyboardType || 'default'}
                    autoCapitalize={autoCapitalize}
                    placeholder={placeholder}
                    placeholderTextColor={placeHolderColor || "black"}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureType}
                    style={[styles.input, textInputStyle]}
                // {...restProps}
                />
            </View>
        </SafeAreaView>
    )
}

export default TextInputs

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white_background,
        borderRadius: 16,
        width: "80%",
        height: 42,
        alignSelf: 'center',
        // paddingHorizontal: "3%",
        paddingLeft: "6%",
        paddingRight: "3%",
        marginBottom: "4%",
    },
    icon: {
        width: 18,
        height: 18,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: Colors.primary_color,
        fontFamily: AppFonts.Inter.regular,
        marginLeft: "5%",
        // backgroundColor: 'plum',
        // marginHorizontal: '3%',
    },
})